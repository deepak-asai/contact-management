const SuccessJS = require('../dto/successDTO');

module.exports = {
    createContact: (req, res, next) => {
        try {
            var contacts = req.body;
            var successDTO = new SuccessJS();
            successDTO.
            res.json("success");
        } catch (err) {
            console.log(err);
        }
    },
}