var contactDao = require('../dao/contactDao');
exports.createContact = async function (contact) {
    contact.createdDate = new Date();
    await contactDao.createContact(contact);
}

exports.deleteContact = async function (id) {
    await contactDao.deleteContact(id);
}

exports.searchContact = async function (keyword) {
    return await contactDao.searchContact(keyword);
}

exports.updateContact = async function (id, contact) {
    return await contactDao.updateContact(id, contact);
}

exports.listAllContacts = async function () {
    return await contactDao.listAllContacts();
}

//used in contactGroupValidator
exports.getContactsForIds = async function (contactIds) {
    return await contactDao.getContactsForIds(contactIds);
}