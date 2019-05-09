const crudOperations = require('./crudOperations');
const mongo = require('mongodb');

exports.createContact = async function (contact) {
    return await crudOperations.insert('contact', contact);
}

exports.deleteContact = async function (id) {
    var contactId = new mongo.ObjectID(id);
    var deleteCriteria = {
        "_id": contactId
    };
    await crudOperations.delete('contact', deleteCriteria);
}

exports.searchContact = async function (keyword) {
    var keywordPattern = '.*' + keyword + '.*';
    var searchCriteria = {
        $or: [{
                "name": {
                    $regex: keywordPattern
                }
            },
            {
                "number_tags.numbers": {
                    $regex: keywordPattern
                }
            },
            {
                "email_tags.emails": {
                    $regex: keywordPattern
                }
            },
        ]
    };
    var sortCriteria = {
        "createdDate": -1
    }
    return await crudOperations.search('contact', searchCriteria, sortCriteria);
}

exports.updateContact = async function (id, contact) {
    var contactId = new mongo.ObjectID(id);
    var updateCriteria = {
        "_id": contactId
    };
    return await crudOperations.update('contact', updateCriteria, contact);
}

exports.listAllContacts = async function () {
    var searchCriteria = {};
    var sortCriteria = {
        "createdDate": -1
    }
    return await crudOperations.search('contact', searchCriteria, sortCriteria);
}

exports.getContactsForIds = async function (contactListIds) {
    var contactListMongoIds = [];

    for (var contactListIds_iter in contactListIds) {
        contactListMongoIds.push(new mongo.ObjectID(contactListIds[contactListIds_iter]));
    }

    var query = {
        '_id': {
            $in: contactListMongoIds
        }
    }

    return await crudOperations.search('contact', query, {});
}