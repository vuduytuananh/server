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
router.get('/bacninh', function(req, res, next) {
  res.render('phanphoi_bacninh');
});
router.get('/thaibinh', function(req, res, next) {
  res.render('phanphoi_thaibinh');
});
router.get('/bacgiang', function(req, res, next) {
  res.render('phanphoi_bacgiang');
});
router.get('/vinhphuc', function(req, res, next) {
  res.render('phanphoi_vinhphuc');
});
router.get('/thainguyen', function(req, res, next) {
  res.render('phanphoi_thainguyen');
});
router.get('/phutho', function(req, res, next) {
  res.render('phanphoi_phutho');
});
router.get('/ninhbinh', function(req, res, next) {
  res.render('phanphoi_ninhbinh');
});
router.get('/hoabinh', function(req, res, next) {
  res.render('phanphoi_hoabinh');
});
router.get('/thanhhoa', function(req, res, next) {
  res.render('phanphoi_thanhhoa');
});
router.get('/nghean', function(req, res, next) {
  res.render('phanphoi_nghean');
});


module.exports = router;
