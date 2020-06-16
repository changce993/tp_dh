var express = require('express');
var router = express.Router();
var movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);
router.get('/detail/:id', movieController.detail);
router.get('/edit/:id', movieController.formEdit);
router.post('/edit/:id', movieController.edit);
router.get('/create', movieController.formCreate);
router.post('/create', movieController.create);
router.post('/delete/:id', movieController.destroy);

module.exports = router;


