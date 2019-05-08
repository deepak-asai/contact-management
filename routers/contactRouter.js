const express = require('express');
const contactsController = require('../controller/contactsController');
const contactsValidator = require('../middleware/contactValidator');

const router = express.Router();

router.post('/contacts', contactsValidator.validateContactDetails, contactsController.createContact);
router.delete('/contacts/:contactId', contactsController.deleteContact);
router.get('/contacts', contactsController.listAllContacts);
router.get('/contacts/:keyword', contactsController.searchContact);
router.put('/contacts', contactsValidator.validateContactDetails, contactsController.updateContact);

module.exports = router;