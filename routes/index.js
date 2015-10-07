var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Generator Site',
                        message: 'Our first page'} );
});


/* GET ABOUT page */
router.get('/about', function(req, res, next) {
   res.render('about'); 
});

router.get('/Contact', function(req, res, next) {
   res.render('Contact'); 
});

router.get('/services', function(req, res, next) {
   res.render('services'); 
});

router.get('/Projects', function(req, res, next) {
   res.render('Projects'); 
});


module.exports = router;
