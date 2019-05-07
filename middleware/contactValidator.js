const errorJS = require('../dto/errorDTO');
const genericConstants = require('../constants/genericConstants');
module.exports = {
    validateContactDetails: async (req, res, next) => {
        var errorMessages = [];
        var contact = req.body;

        //name validation
        if (contact.name == '' || contact.name == null) {
            errorMessages.push("Contact Name is required");
        }

        //mobile number validation
        for (var number_tag_iter in contact.number_tags) {
            var break_condition = false;
            number_tag = contact.number_tags[number_tag_iter];
            for (var number_iter in number_tag.numbers) {
                number = number_tag.numbers[number_iter];
                if (new RegExp(genericConstants.NUMBER_REGEX).test(number) == false) {
                    errorMessages.push("Contact Number must be valid");
                    break_condition = true;
                    break;
                }
            }
            if (break_condition) {
                break;
            }
        }

        //email address validation
        for (var email_tag_iter in contact.email_tags) {
            var break_condition = false;
            email_tag = contact.email_tags[email_tag_iter];
            for (var email_iter in email_tag.emails) {
                email = email_tag.emails[email_iter];
                if (new RegExp(genericConstants.EMAIL_REGEX).test(email) == false) {
                    errorMessages.push("Email ID must be valid");
                    break_condition = true;
                    break;
                }
            }
            if (break_condition) {
                break;
            }
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

    }
}