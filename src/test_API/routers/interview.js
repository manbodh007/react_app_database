
const express = require('express');
const router = express.Router();
const passport = require('passport');
const interviewController = require('../controllers/interview');
router.get('/all',interviewController.allInterview);
router.post('/create',passport.authenticate('jwt',{session:false}),interviewController.create);
router.get('/select/student',passport.authenticate('jwt',{session:false}),interviewController.selectStudent);
router.get('/changeResult',passport.authenticate('jwt',{session:false}),interviewController.changeInterviewInfo);
module.exports = router;
