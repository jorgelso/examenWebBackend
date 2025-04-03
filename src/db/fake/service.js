const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.students = new Map();
    // Initialize with 5 dummy students
    const dummyCustomers = [
      { id: '1', name: 'John Doe', score: '100', debt: "1000000000000000" },
      { id: '2', name: 'Jane Smith', score: '100', debt: "0" },
      { id: '3', name: 'Bob Johnson', score: '100', debt: "1000" },
      { id: '4', name: 'Alice Brown', score: '100', debt: "0" },
      { id: '5', name: 'Charlie Wilson', score: '100', debt: "6" },
    ];

    dummyCustomers.forEach((student) => {
      this.students.set(student.id, student);
    });
  }

  async getAllCustomers() {
    return Array.from(this.students.values());
  }

  async getCustomerById(id) {
    return this.students.get(id);
  }
}

module.exports = FakeService;
