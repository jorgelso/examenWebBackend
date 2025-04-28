class UserHttpHandler {
  constructor(userController) {
    this.userController = userController;
  }

  async getAllUsers(req, res) {
    try {
      const users = await this.userController.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await this.userController.login(username, password);
      res.json(user);
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
}

module.exports = UserHttpHandler;