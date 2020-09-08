const mongoose = require("mongoose");
const InterviewInfo = require("./interview_info");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  selected:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Student'
    }
  ],
  students:[
      {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Student'
      }
  ],
  interviewInfo:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'InterviewInfo'
    }
  ]
});

const Interview = mongoose.model('Interview',schema);
module.exports = Interview;
