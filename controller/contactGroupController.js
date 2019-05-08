const successJS = require('../dto/successDTO');
const contactGroupService = require('../service/contactGroupService');

module.exports = {
    createContactGroup: async (req, res, next) => {
        try {
            var contactGroup = req.body;
            await contactGroupService.createContactGroup(contactGroup);
            console.log("Contact Group created successfully");

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Contact Group created successfully";
            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during creating the contact: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },

    deleteContactGroup: async (req, res, next) => {
        try {
            var contactGroupId = req.params.contactGroupId;
            await contactGroupService.deleteContactGroup(contactGroupId);
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

    searchContactGroup: async (req, res, next) => {
        try {
            var keyword = req.params.contactGroupId;
            var contactsList = await contactGroupService.searchContactGroup(keyword);

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

    updateContactGroup: async (req, res, next) => {
        try {
            var contactGroup = req.body;
            var id = contactGroup.id;
            delete contactGroup['id'];

            await contactGroupService.updateContactGroup(id, contactGroup);

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Contact Group update was successful";

            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during updating the contact group: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },
    listAllContactGroups: async (req, res, next) => {
        try {
            var contactGroupList = await contactGroupService.listAllContactGroups();

            var successDTO = new successJS.SuccessDTO();
            successDTO.successMessage = "Listing contacts was successful";
            successDTO.data = contactGroupList;

            res.json(successDTO);

        } catch (err) {
            console.log("Error occured during listing the contacts: ", err);
            res.status(err.errorCode);
            res.json(err);
        }
    },
}