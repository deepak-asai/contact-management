const crudOperations = require('./crudOperations');

exports.createContact = async function (contact) {
    await crudOperations.insert('contact', contact)

}