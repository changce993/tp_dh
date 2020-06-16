const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainController.js');

router.get('/', mainControllers.home);
router.get('/creditos', mainControllers.credits);

module.exports = router;
