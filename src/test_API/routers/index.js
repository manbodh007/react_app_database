const express = require('express');
const router = express.Router();

router.use('/employees',require('./user'));
router.use('/student',require('./student'));
router.use('/interview',require('./interview'));

module.exports = router;