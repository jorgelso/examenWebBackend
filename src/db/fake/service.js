const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.students = new Map();
    // Initialize with 5 dummy students
    const dummyStudents = [
      { id: '1', name: 'John Doe', score: 100, debt: 300 },
      { id: '2', name: 'Jane Smith', score: 0, debt: 0 },
      { id: '3', name: 'Bob Johnson', score: 60, debt: 1000 },
      { id: '4', name: 'Alice Brown', score: 20, debt: 0 },
      { id: '5', name: 'Charlie Wilson', score: 34, debt: 6 },
    ];

    dummyStudents.forEach((student) => {
      this.students.set(student.id, student);
    });
  }

  async getAllStudents() {
    return Array.from(this.students.values());
  }

  async getStudentById(id) {
    return this.students.get(id);
  }
}

module.exports = FakeService;
