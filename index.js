const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoUtil = require('./utils/mongoUtil');
const testRouter = require('./routers/testRouter');
const contactRouter = require('./routers/contactRouter');
const contactGroupRouter = require('./routers/contactGroupRouter');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cors());

app.use('/api/test', testRouter);
app.use('/api', contactRouter);
app.use('/api', contactGroupRouter);


mongoUtil.connect(function (err, client) {
    if (err) console.log(err);
    console.log("db connected");

    var server = app.listen(5001, function () {
        console.log("Running rest on port " + 5001);
    });
    module.exports = server;
});