const express = require('express');
const contactsController = require('../controller/contactsController');

const router = express.Router();

router.post('/contact', contactsController.createContact);

module.exports = router;