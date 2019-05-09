var contactGroupDao = require('../dao/contactGroupDao');
var contactService = require('../service/contactService');

exports.createContactGroup = async function (contactGroup) {
    return await contactGroupDao.createContactGroup(contactGroup);
}

exports.getContactGroupByName = async function (contactGroupName) {
    return await contactGroupDao.getContactGroupByName(contactGroupName);
}

exports.deleteContactGroup = async function (id) {
    await contactGroupDao.deleteContactGroup(id);
}

exports.searchContactGroup = async function (contactGroupId) {
    var contactGroup = await contactGroupDao.searchContactGroup(contactGroupId);
    console.log('contactGroup: ', contactGroup);
    var contacts = await contactService.getContactsForIds(contactGroup[0].contactList);
    var contactGroupWithContacts = {};
    contactGroupWithContacts['name'] = contactGroup[0].name;
    contactGroupWithContacts['contactList'] = contacts;
    return contactGroupWithContacts;
}

exports.updateContactGroup = async function (id, contactGroup) {
    return await contactGroupDao.updateContactGroup(id, contactGroup);
}

exports.listAllContactGroups = async function () {
    return await contactGroupDao.listAllContactGroups();
}