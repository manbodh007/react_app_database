const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/sign-up',userController.createUser);
router.post('/log-in',userController.createSession);

module.exports = router;