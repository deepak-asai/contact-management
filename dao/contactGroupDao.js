const crudOperations = require('./crudOperations');
const mongo = require('mongodb');

exports.createContactGroup = async function (contactGroup) {
    return await crudOperations.insert('contact-groups', contactGroup)
}

exports.getContactGroupByName = async function (contactGroupName) {
    var query = {
        'name': contactGroupName
    }
    return await crudOperations.search('contact-groups', query, {});

}

exports.deleteContactGroup = async function (id) {
    var contactGroupId = new mongo.ObjectID(id);
    var deleteCriteria = {
        "_id": contactGroupId
    };
    await crudOperations.delete('contact-groups', deleteCriteria);
}

exports.searchContactGroup = async function (id) {
    var contactGroupId = new mongo.ObjectID(id);
    var searchCriteria = {
        "_id": contactGroupId
    };

    return await crudOperations.search('contact-groups', searchCriteria, {});
}

exports.updateContactGroup = async function (id, contactGroup) {
    var contactGroupId = new mongo.ObjectID(id);
    var updateCriteria = {
        "_id": contactGroupId
    };
    return await crudOperations.update('contact-groups', updateCriteria, contactGroup);
}

exports.listAllContactGroups = async function () {
    var searchCriteria = {};
    return await crudOperations.search('contact-groups', searchCriteria, {});
}