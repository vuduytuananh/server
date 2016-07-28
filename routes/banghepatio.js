var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ban-ghe-patio');
});
router.get('/hinhanh', function(req, res, next) {
  res.render('patio-gallery');
});

module.exports = router;
