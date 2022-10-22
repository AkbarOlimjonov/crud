const express = require('express');
const router = express.Router();
const construct = require('../controller/products')


router.get('/',construct.allProducts)
router.post('/add',construct.addProduct)


module.exports = router;