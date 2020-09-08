const Student = require("../models/student");
const fs = require("fs");
const csv = require("fast-csv");
const ws = fs.createWriteStream("public/data.csv");

module.exports.create = async function (req, res) {
  try {
    let student = await Student.create(req.body);

    if (student) {
      return res.json(200, {
        success: true,
        message: "new student created successfully",
        student: student,
      });
    }
  } catch (err) {
      console.log(err);
    return res.json(500, {
      error: "internal server error",
    });
  }
};
module.exports.update = async function (req, res) {
  try {
    let student = await Student.findById(req.query.id);
    if (student) {
      student.name = req.body.name;
      student.batch = req.body.batch;
      student.status = req.body.status;
      student.collageName = req.body.collage_name;
      student.dsaScore = req.body.dsa_score;
      student.reactScore = req.body.react_score;
      studentweb_devScore = req.body.web_dev_score;
      student.save();

      return res.json(200, {
        success: true,
        message: "student data update successfull",
        student: student,
      });
    }
  } catch (err) {
    return res.json(500, {
      error: "internal server error",
    });
  }
};

module.exports.delete = async function (req, res) {
  try {
    let student = await Student.findById(req.query.student_id);
    if (student) student.remove();

    return res.json(200, {
      success: true,
      message: "student data deleted successfull",
    });
  } catch (err) {
    return res.json(500, {
      error: "internal server error",
    });
  }
};

module.exports.allStudents = async function (req, res) {
  try {
    let student = await Student.find().populate('interviewInfo');
    return res.json(200, {
      success: true,
      message: "fetching success of students",
      students: student,
    });
  } catch (err) {
    return res.json(500, {
      error: "internal server error",
    });
  }
};
// module.exports.downloadCSV = async function (req, res) {
//   try {
      
//   } catch (err) {
//     console.log("error in csv", error);
//     return res.json(500, {
//       message: "error to download csv",
//     });
//   }
// };
