var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

//var products = require('../seed/product-seeder');

/* GET home page. */
router.get('/', function(req, res, next) {
 Product.find(function(err,docs){
  var productChunks = [];
  var chunkSize = 3;

  for( var i=0;i<docs.length;i+=chunkSize)
  {
    productChunks.push(docs.slice(i,i+chunkSize));
  }
console.log(productChunks);
  res.render('shop/index', {products: productChunks});

});

});

router.get('/user/signup', function(req,res,next){
  res.render('user/signup',{csrfToken:req.csrfToken()});
});

router.post('/user/signup',function(req,res,next){
  res.redirect('/');
});

module.exports = router;
