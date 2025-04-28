const express = require('express');

const router = express.Router();
const UserHttpHandler = require('../handlers/user');
const UserServiceFactory = require('../db/factory');
const UserController = require('../controllers/user');

const userService = UserServiceFactory.create('fake');
const userController = new UserController(userService);
const userHandler = new UserHttpHandler(userController);

router.get('/', userHandler.getAllUsers.bind(userHandler));

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userController.login(username, password);
    res.json({ success: true, user });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
});

module.exports = router;