var express = require('express');
var router = express.Router();
//var products = require('../seed/product-seeder');
var Product = require('../models/product');
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

module.exports = router;
