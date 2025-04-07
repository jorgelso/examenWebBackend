class StudentController {
  constructor(service) {
    this.service = service;
  }

  static cleanForApi(student) {
    if (!student) return null;
    const {
      id, name, status,
    } = student;
    return {
      id, name, status,
    };
  }

  static calculateStatus(score, debt) {
    const PASSING_GRADE = 70;
    const HAS_DEBT = debt > 0;

    if (score >= PASSING_GRADE && !HAS_DEBT) {
      return 'Approved';
    }
    if (score < PASSING_GRADE && !HAS_DEBT) {
      return 'Pending';
    }
    if (score >= PASSING_GRADE && HAS_DEBT) {
      return 'Restructure';
    }
    if (score < PASSING_GRADE && HAS_DEBT) {
      return 'Expelled';
    }
    return 'Unknown';
  }

  async getAll() {
    const students = await this.service.getAllStudents();
    for (let i = 0; i < students.length; i += 1) {
      const { score, debt } = students[i];
      students[i].status = StudentController.calculateStatus(score, debt);
      students[i] = StudentController.cleanForApi(students[i]);
    }
    return students;
  }

  async getById(id) {
    const student = await this.service.getStudentById(id);
    if (!student) throw new Error('Student not found new message');

    const { score, debt } = student;
    student.status = StudentController.calculateStatus(score, debt);
    const cleanStudent = StudentController.cleanForApi(student);

    return cleanStudent;
  }
}

module.exports = StudentController;
