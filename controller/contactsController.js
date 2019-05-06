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
            res.status(500);
            res.json(err);
        }
    },
}