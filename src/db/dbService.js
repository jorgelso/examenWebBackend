class DBService {
  constructor() {
    this.initialized = false;
  }

  async getAllUsers() {
    if (!this.initialized) {
      throw new Error('Service not initialized');
    }
    throw new Error('Method not implemented');
  }

  async findUserByUsername(_username) {
    if (!this.initialized) {
      throw new Error('Service not initialized');
    }
    throw new Error('Method not implemented');
  }
}

module.exports = DBService;