const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoUtil = require('./utils/mongoUtil');
const testRouter = require('./routers/testRouter');
const contactRouter = require('./routers/contactRouter');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

app.use('/api/test', testRouter);
app.use('/api', contactRouter);

mongoUtil.connect(function (err, client) {
    if (err) console.log(err);
    console.log("db connected");
    // db = mongoUtil.getDb();
    // var query = {
    //     "number_tags.number": /995/
    // };
    // db.collection("contact").find(query).toArray(function (err, result) {
    //     if (err) throw err;
    //     console.log("res: ", result);
    // });

    app.listen(5001, function () {
        console.log("Running rest on port " + 5001);
    });
});