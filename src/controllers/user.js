class UserController {
  constructor(service) {
    this.service = service;
  }

  static cleanForApi(user) {
    if (!user) return null;
    const { fullName, ticketNumber } = user;
    return { fullName, ticketNumber };
  }

  async getAll() {
    const users = await this.service.getAllUsers();
    return users.map((user) => UserController.cleanForApi(user));
  }

  async login(username, password) {
    const user = await this.service.findUserByUsername(username);

    if (!user || user.password !== password) {
      throw new Error('Login failed: Invalid username or password');
    }

    return UserController.cleanForApi(user);
  }
}

module.exports = UserController;