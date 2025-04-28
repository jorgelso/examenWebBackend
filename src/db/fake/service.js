const DBService = require('../dbService');

class FakeUserService extends DBService {
  constructor() {
    super();
    this.users = new Map();

    const dummyUsers = [
      { username: 'alejandra.m', password: 'verde123', fullName: 'Alejandra Morales', ticketNumber: '00123' },
      { username: 'david.p', password: 'bosque456', fullName: 'David Pérez', ticketNumber: '00124' },
      { username: 'lucia.r', password: 'eco789', fullName: 'Lucía Ramírez', ticketNumber: '00125' },
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