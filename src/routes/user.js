const express = require('express');

const router = express.Router();
const UserHttpHandler = require('../handlers/user');
const UserServiceFactory = require('../db/factory');
const UserController = require('../controllers/user');

const userService = UserServiceFactory.create('fake');
const userController = new UserController(userService);

const userHandler = new UserHttpHandler(userController);

router.get('/', userHandler.getAllUsers.bind(userHandler));
router.post('/login', userHandler.login.bind(userHandler));

module.exports = router;