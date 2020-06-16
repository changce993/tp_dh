var express = require('express');
var router = express.Router();


router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

router.get('/', function(req, res, next) {
  res.render('home', { title: 'home' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/music', function(req, res, next) {
    res.render('music', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});
   
    

module.exports = router;
