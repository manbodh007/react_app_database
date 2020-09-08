const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
    enum: ["PASS", "FAIL", "On-Hold", "Did Not Attempt"],
  },
  date:{
    type:String,
    required: true,
  },
  company:{
    type:String,
    require:true,
  },
  interview:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Interview'
  },
  student:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Student'
  }
  
});

const InterviewInfo = mongoose.model('InterviewInfo',schema);
module.exports = InterviewInfo;
