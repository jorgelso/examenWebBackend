class CustomerController {
  constructor(service) {
    this.service = service;
  }

  async getAll() {
    return this.service.getAllCustomers();
  }

  async getById(id) {
    const student = await this.service.getCustomerById(id);
    if (!student) throw new Error('student not found new message');
    return student;
  }
}

module.exports = CustomerController;
