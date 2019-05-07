const express = require('express');
const contactsController = require('../controller/contactsController');

const router = express.Router();

router.post('/contact', contactsController.createContact);
router.delete('/contact/:contactId', contactsController.deleteContact);
router.get('/contact/:keyword', contactsController.searchContact);
router.put('/contact', contactsController.updateContact);

module.exports = router;