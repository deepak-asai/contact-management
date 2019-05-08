const express = require('express');
const contactGroupController = require('../controller/contactGroupController');
const contactsGroupValidator = require('../middleware/contactGroupValidator');

const router = express.Router();

router.post('/contactGroups', contactsGroupValidator.validateContactDetails, contactGroupController.createContactGroup);
router.put('/contactGroups', contactsGroupValidator.validateContactDetails, contactGroupController.updateContactGroup);
router.delete('/contactGroups/:contactGroupId', contactGroupController.deleteContactGroup);
router.get('/contactGroups', contactGroupController.listAllContactGroups);
router.get('/contactGroups/:contactGroupId', contactGroupController.searchContactGroup);

module.exports = router;