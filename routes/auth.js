const express = require('express');
const router = express.Router();
const construct = require('../controller/auth')


router.post('/register/',construct.Register);
router.post('/login/',construct.Login);


module.exports = router;