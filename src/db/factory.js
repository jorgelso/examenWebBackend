const FakeUserService = require('./fake/service');

class DBFactory {
  static create(type, _connectionString) {
    switch (type.toLowerCase()) {
      case 'fake':
        return new FakeUserService();
      default:
        throw new Error(`Unknown service type: ${type}`);
    }
  }
}

module.exports = DBFactory;