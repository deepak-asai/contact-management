const mongoUtil = require('../utils/mongoUtil');
const errorJS = require('../dto/errorDTO');

exports.insert = async function (collectionName, object) {
    return new Promise((resolve, reject) => {
        var db = mongoUtil.getDb();
        db.collection(collectionName).insertOne(object, function (err, res) {
            if (err) {
                var errorDTO = new errorJS.ErrorDTO();
                errorDTO.errorMessage = "some db error has occurred";
                errorDTO.data = err;
                return reject(errorDTO);
            }
            console.log("Document Inserted");
            return resolve();

        });
    });

}