const express = require('express');
const testContoller = require('../controller/testController');

const router = express.Router();

router.get('/', testContoller.testApi);

module.exports = router;