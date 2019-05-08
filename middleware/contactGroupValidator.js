const errorJS = require('../dto/errorDTO');
const crudOperations = require('../dao/crudOperations');
const mongo = require('mongodb');
const contactGroupService = require('../service/contactGroupService');
const contactService = require('../service/contactService');

module.exports = {
    validateContactDetails: async (req, res, next) => {
        try {

            var errorMessages = [];
            var contactGroup = req.body;

            console.log('in validator');
            //name validation
            if (contactGroup.name == '' || contactGroup.name == null) {
                errorMessages.push("Contact Group Name is required");
            }

            //duplicate name validation should not be done for Update request;
            if (req.method != 'PUT') {
                var contactsGroupWithSameName = await contactGroupService.getContactGroupByName(contactGroup.name);
                if (contactsGroupWithSameName.length > 0) {
                    errorMessages.push("Contact group with same name already exist");
                }
            }

            //contact id validation
            var contactsList = await contactService.getContactsForIds(contactGroup.contactList);
            console.log('contactsList: ', contactsList);
            if (contactsList.length != contactGroup.contactList.length) {
                errorMessages.push("One or More contacts doesn't exist");
            }


            if (errorMessages.length > 0) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "Bad request";
                errorDTO.errorCode = 400;
                errorDTO.data = errorMessages;

                res.status(400);
                res.json(errorDTO);
            } else {
                return next();
            }

        } catch (err) {
            console.log(err);
            var errorDTO = new errorJS.ErrorDTO();
            errorDTO.errorMessage = "some server side error has occurred";
            errorDTO.errorCode = 500;
            errorDTO.data = err;
            res.json(errorDTO);
        }

    }
}