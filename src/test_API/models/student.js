const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["placed", "not-placed"],
  },
  collageName: {
    type: String,
  },
  dsaScore: {
    type: Number,
  },
  reactScore: {
    type: Number,
  },
  web_devScore: {
    type: Number,
  },
  interviewInfo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewInfo",
    }
  ],
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
