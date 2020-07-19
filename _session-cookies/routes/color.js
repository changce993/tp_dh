var express = require('express');
var router = express.Router();
var colorController = require("../controllers/colorController")

router.get('/', colorController.show)
router.post('/', colorController.choose)

module.exports = router;