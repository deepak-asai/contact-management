const dbConstants = require('../constants/databaseConstants');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
const url = dbConstants.DB_URL;

var db;

exports.connect = function (callback) {
    MongoClient.connect(
        url, {
            useNewUrlParser: true
        },
        function (err, client) {
            db = client.db('contact-mangement');
            return callback(err);
        }
    );
}

exports.getDb = function () {
    return db;
}