const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.listen(5001, function () {
    console.log("Running RestHub on port " + 5001);
});