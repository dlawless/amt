var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'AMT' });
});

router.get('/regulations', function(req, res) {
  res.render('regulations', { title: 'Regulations' });
});


router.get('/tcds', function(req, res) {
  res.render('tcds', { title: 'Type Certificate Data Sheet' });
});

router.get('/pma', function(req, res) {
  res.render('pma', { title: 'PMA' });
});


router.get('/tso', function(req, res) {
  res.render('tso', { title: 'TSO' });
});


router.get('/ad', function(req, res) {
  res.render('ad', { title: 'Airworthiness Directive (AD)' });
});

router.get('/ac', function(req, res) {
  res.render('ac', { title: 'Advisory Circulars (AC)' });
});


router.get('/part43', function(req, res) {
  res.render('part43', { title: 'FAR 43' });
});

router.get('/part21', function(req, res) {
  res.render('part21', { title: 'FAR 21' });
});

router.get('/part91', function(req, res) {
  res.render('part91', { title: 'FAR 91' });
});

router.get('/part65', function(req, res) {
  res.render('part65', { title: 'FAR 65' });
});


router.get('/servicebulletin', function(req, res) {
  res.render('servicebulletin', { title: 'Service Bulletins' });
});



router.get('/forms', function(req, res) {
  res.render('forms', { title: 'Forms' });
});

router.get('/airworthiness', function(req, res) {
  res.render('airworthiness', { title: 'Airworthiness' });
});

router.get('/definitions', function(req, res) {
  res.render('definitions', { title: 'Definitions' });
});


module.exports = router;
