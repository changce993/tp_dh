var express = require('express');
var router = express.Router();
var moviesControllers = require('../controllers/moviesControllers');

/* GET home page. */
router.get('/', moviesControllers.allMovies);
router.get('/movies/detail/:id', moviesControllers.detailMovie);
router.get('/movies/new', moviesControllers.newMovies);
router.get('/movies/recommended', moviesControllers.recommended);

module.exports = router;
