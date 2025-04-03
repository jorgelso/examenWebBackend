const express = require('express');

const router = express.Router();
const CustomerHttpHandler = require('../handlers/student');
const CustomerServiceFactory = require('../db/factory');
const CustomerController = require('../controllers/student');

// Create the service and controller
const studentService = CustomerServiceFactory.create('fake');
const studentController = new CustomerController(studentService);

// Create the handler instance
const studentHandler = new CustomerHttpHandler(studentController);

// Set up routes with bound handler methods
router.get('/', studentHandler.getAllCustomers.bind(studentHandler));
router.get('/:id', studentHandler.getCustomerById.bind(studentHandler));

module.exports = router;
