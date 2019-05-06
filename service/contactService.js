var contactDao = require('../dao/contactDao');
exports.createContact = async function (contact) {
    await contactDao.createContact(contact);
}