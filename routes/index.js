const express = require('express');
const router = express.Router();
const construct = require('../controller/index')


router.get('/',construct.homePage)


module.exports = router;