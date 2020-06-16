// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');
const admin = require('../middlewares/admin');

/* GET - home page. */
router.get('/', mainController.root);
router.get('/admin', admin, mainController.login);

module.exports = router;
