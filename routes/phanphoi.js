var express = require('express');
var router = express.Router();

/* GET gioi thieu page. */
router.get('/', function(req, res, next) {
  res.render('phanphoi');
});
router.get('/hanoi', function(req, res, next) {
  res.render('phanphoi_hanoi');
});
router.get('/haiduong', function(req, res, next) {
  res.render('phanphoi_haiduong');
});
router.get('/hungyen', function(req, res, next) {
  res.render('phanphoi_hungyen');
});
router.get('/haiphong', function(req, res, next) {
  res.render('phanphoi_haiphong');
});
router.get('/quangninh', function(req, res, next) {
  res.render('phanphoi_quangninh');
});
router.get('/hanam', function(req, res, next) {
  res.render('phanphoi_hanam');
});

module.exports = router;
