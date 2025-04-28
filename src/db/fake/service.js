const DBService = require('../dbService');

class FakeUserService extends DBService {
  constructor() {
    super();
    this.users = new Map();

    const dummyUsers = [
      { username: 'sandra.g', password: 'latte123', fullName: 'Sandra García', ticketNumber: '5001' },
      { username: 'roberto.m', password: 'capuccino456', fullName: 'Roberto Martínez', ticketNumber: '5002' },
      { username: 'esteban.l', password: 'espresso789', fullName: 'Esteban López', ticketNumber: '5003' },
    ];

    dummyUsers.forEach((user) => {
      this.users.set(user.username, user);
    });

    this.initialized = true;
  }

  async getAllUsers() {
    return Array.from(this.users.values());
  }

  async findUserByUsername(username) {
    return this.users.get(username);
  }
}

module.exports = FakeUserService;