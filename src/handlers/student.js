class CustomerHttpHandler {
  constructor(studentController) {
    // We use an injected controller instead of initializing one here
    // this.studentController = new CustomerHttpHandler()
    this.studentController = studentController;
  }

  async getAllCustomers(req, res) {
    try {
      const students = await this.studentController.getAll();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCustomerById(req, res) {
    try {
      const student = await this.studentController.getById(req.params.id);
      res.json(student);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

// Export the class directly
module.exports = CustomerHttpHandler;
