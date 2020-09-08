const Interview = require("../models/interview");
const Student = require("../models/student");
const InterviewInfo = require("../models/interview_info");

module.exports.allInterview = async function (req, res) {
  try {
    let interview = await Interview.find()
      .populate("students")
      .populate("selected")
      .populate("interviewInfo");

    if (interview) {
      return res.json(200, {
        message: "here is list of interviews",
        success: true,
        interviews: interview,
      });
    }
    return res.json(404, {
      message: "interview not found",
      success: false,
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internal server error",
    });
  }
};
module.exports.create = async function (req, res) {
  try {
    let interview = await Interview.create(req.body);
    let students = await Student.find();

    for (i of students) {
      interview.students.push(i);
    }
    interview.save();
    interview = await interview.populate("students").execPopulate();

    if (interview) {
      return res.json(200, {
        message: "new interview created",
        success: true,
        interview: interview,
      });
    }
    return res.json(404, {
      message: "interview not created",
      success: false,
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internal server error",
    });
  }
};
module.exports.selectStudent = async function (req, res) {
  try {
    let interview = await Interview.findById(req.query.interview_id).populate(
      "interviewInfo"
    );
    if (interview) {
      let student = await Student.findById(req.query.student_id).populate(
        "InterviewInfo"
      );

      await Interview.findByIdAndUpdate(req.query.interview_id, {
        $pull: { students: req.query.student_id },
      });

      await interview.selected.push(student);
      await interview.save();

      if (student) {
        let interview_info = await InterviewInfo.create({
          status: "On-Hold",
          date: new Date().toLocaleDateString(),
          company: "mock interview",
          interview: interview._id,
          student: student._id,
        });
        // student.interviewResult.push("On-Hold");
        // student.interviewDate.push(new Date().toLocaleDateString());
        // student.interviewCompany.push("mock interview");
        await student.interviewInfo.push(interview_info);
        await interview.interviewInfo.push(interview_info);
        await interview.save();
        await student.save();
      }

      return res.json(200, {
        message: "student selected for interview",
        success: true,
        student: student,
        interview: interview,
      });
    }
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internal server error",
    });
  }
};

module.exports.changeInterviewInfo = async function (req, res) {
  try {
    let interviewInfo = await InterviewInfo.findOne({
      interview: req.query.interview_id,
      student: req.query.student_id,
    });

    if (interviewInfo) {
      interviewInfo.status = req.query.status;
      interviewInfo.save();
      let allInterview = await Interview.find()
        .populate("interviewInfo")
        .populate("selected")
        .populate("students");
      return res.json(200, {
        message: "interview result changed",
        success: true,
        interview: allInterview,
      });
    }
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "internal server error",
    });
  }
};
