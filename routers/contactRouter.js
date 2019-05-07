const express = require('express');
const contactsController = require('../controller/contactsController');
const contactsValidator = require('../middleware/contactValidator');

const router = express.Router();

router.post('/contact', contactsValidator.validateContactDetails, contactsController.createContact);
router.delete('/contact/:contactId', contactsController.deleteContact);
router.get('/contact/:keyword', contactsController.searchContact);
router.put('/contact', contactsValidator.validateContactDetails, contactsController.updateContact);

module.exports = router;