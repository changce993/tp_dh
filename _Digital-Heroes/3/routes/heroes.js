const express = require('express');
const router = express.Router();
const heroesControllers = require('../controllers/heroesController')

router.get('/', heroesControllers.index);
router.get('/detalle/:idHeroe', heroesControllers.heroDetail)
router.get('/bio/:id/:ok?', heroesControllers.bioDetail)

module.exports = router;