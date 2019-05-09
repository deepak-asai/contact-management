const mongoUtil = require('../utils/mongoUtil');
const errorJS = require('../dto/errorDTO');

exports.insert = async function (collectionName, object) {
    return new Promise((resolve, reject) => {
        var db = mongoUtil.getDb();
        db.collection(collectionName).insertOne(object, function (err, res) {
            if (err) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "some db error has occurred";
                errorDTO.errorCode = 500;
                errorDTO.data = err;

                return reject(errorDTO);
            }

            console.log("Document Inserted");
            return resolve(res.insertedId);

        });
    });

}

exports.delete = async function (collectionName, deleteCriteria) {
    return new Promise((resolve, reject) => {

        var db = mongoUtil.getDb();
        db.collection(collectionName).deleteOne(deleteCriteria, function (err, res) {
            if (err) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "some db error has occurred";
                errorDTO.errorCode = 500;
                errorDTO.data = err;

                return reject(errorDTO);
            }
            if (res.deletedCount < 1) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "Document does not exist";
                errorDTO.errorCode = 404;
                errorDTO.data = err;

                return reject(errorDTO);
            }
            console.log("Document Deleted: ", res);
            return resolve();

        });
    });
}

exports.search = async function (collectionName, searchCriteria, sortCriteria) {
    return new Promise((resolve, reject) => {

        var db = mongoUtil.getDb();
        db.collection(collectionName).find(searchCriteria).sort(sortCriteria).toArray(function (err, res) {
            if (err) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "some db error has occurred";
                errorDTO.errorCode = 500;
                errorDTO.data = err;

                return reject(errorDTO);
            }
            console.log("Document Search was successful");
            return resolve(res);

        });

    });
}

exports.update = async function (collectionName, updateCriteria, updateFields) {
    return new Promise((resolve, reject) => {

        var db = mongoUtil.getDb();
        db.collection(collectionName).updateOne(updateCriteria, {
            $set: updateFields
        }, function (err, res) {
            if (err) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "some db error has occurred";
                errorDTO.errorCode = 500;
                errorDTO.data = err;

                return reject(errorDTO);
            }
            if (res.matchedCount < 1) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "Document does not exist";
                errorDTO.errorCode = 404;
                errorDTO.data = err;

                return reject(errorDTO);
            }
            console.log("Document Update was successful");
            return resolve(res);
        });

    });
}