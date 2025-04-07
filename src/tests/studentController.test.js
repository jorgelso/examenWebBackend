const StudentController = require('../controllers/student');

describe('StudentController', () => {
  let mockService;
  let controller;

  beforeEach(() => {
    mockService = {
      getAllStudents: jest.fn(),
      getStudentById: jest.fn(),
    };
    controller = new StudentController(mockService);
  });

  test('should get all students', async () => {
    const students = [{ id: 1, name: 'John Doe', status: "Approved" }];
    mockService.getAllStudents.mockResolvedValue(students);

    const result = await controller.getAll();
    expect(result).toEqual(students);
    expect(mockService.getAllStudents).toHaveBeenCalledTimes(1);
  });

  test('should get student by ID', async () => {
    const student = { id: 1, name: 'John Doe', status: "Approved" };
    mockService.getStudentById.mockResolvedValue(student);

    const result = await controller.getById(1);
    expect(result).toEqual(student);
    expect(mockService.getStudentById).toHaveBeenCalledWith(1);
  });

  test('should throw an error if student not found', async () => {
    mockService.getStudentById.mockResolvedValue(null);

    await expect(controller.getById(1)).rejects.toThrow('Student not found');
  });

  test("should return \"Approved\" as status when grade is at or above 70 and has no debt", () => {
    expect(StudentController.calculateStatus("70", "0")).toBe("Approved");
    expect(StudentController.calculateStatus("100", "0")).toBe("Approved");
  });
  test("should return \"Pending\" as status when grade is below 70 and has no debt", () => {
    expect(StudentController.calculateStatus("69", "0")).toBe("Pending");
    expect(StudentController.calculateStatus("0", "0")).toBe("Pending");
  });
  test("should return \"Restructure\" as status when grade is at or above 70 and has debt", () => {
    expect(StudentController.calculateStatus("70", "500")).toBe("Restructure");
    expect(StudentController.calculateStatus("100", "1")).toBe("Restructure");
  });
  test("should return \"Expelled\" as status when grade is below 70 and has debt", () => {
    expect(StudentController.calculateStatus("69", "500")).toBe("Expelled");
    expect(StudentController.calculateStatus("0", "1")).toBe("Expelled");
  });
});
