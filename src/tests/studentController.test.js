const CustomerController = require('../controllers/student');

describe('CustomerController', () => {
  let mockService;
  let controller;

  beforeEach(() => {
    mockService = {
      getAllCustomers: jest.fn(),
      getCustomerById: jest.fn(),
    };
    controller = new CustomerController(mockService);
  });

  test('should get all students', async () => {
    const students = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
    mockService.getAllCustomers.mockResolvedValue(students);

    const result = await controller.getAll();
    expect(result).toEqual(students);
    expect(mockService.getAllCustomers).toHaveBeenCalledTimes(1);
  });

  test('should get student by ID', async () => {
    const student = { id: 1, name: 'John Doe', email: 'john@example.com' };
    mockService.getCustomerById.mockResolvedValue(student);

    const result = await controller.getById(1);
    expect(result).toEqual(student);
    expect(mockService.getCustomerById).toHaveBeenCalledWith(1);
  });

  test('should throw an error if student not found', async () => {
    mockService.getCustomerById.mockResolvedValue(null);

    await expect(controller.getById(1)).rejects.toThrow('student not found');
  });
});
