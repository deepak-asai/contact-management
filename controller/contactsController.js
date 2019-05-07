const successJS = require('../dto/successDTO');
const contactService = require('../service/contactService');

module.exports = {
    createContact: async (req, res, next) => {
        try {
            var contact = req.body;
            await contactService.createContact(contact);
            console.log("Contact created successfully");

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Contact created successfully";
            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during creating the contact: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },

    deleteContact: async (req, res, next) => {
        try {
            var contactId = req.params.contactId;
            await contactService.deleteContact(contactId);
            console.log("Contact deleted successfully");

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Contact deleted successfully";
            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during deleting the contact: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },

    searchContact: async (req, res, next) => {
        try {
            var keyword = req.params.keyword;
            var contactsList = await contactService.searchContact(keyword);

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Contact search was successful";
            successDTO.data = contactsList;

            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during searching the contact: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },

    updateContact: async (req, res, next) => {
        try {
            var contact = req.body;
            var id = contact.id;
            delete contact['id'];

            console.log("contact: ", contact);
            await contactService.updateContact(id, contact);

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Contact update was successful";

            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during updating the contact: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },
}