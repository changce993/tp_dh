// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

/* GET - home page. */
router.get('/detail/:id/:category', productController.root);

module.exports = router;
