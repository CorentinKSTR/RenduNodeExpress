const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/create', userController.createUser)
router.get('/', userController.getUsers)
router.post('/login', userController.loginUser)

module.exports = router;