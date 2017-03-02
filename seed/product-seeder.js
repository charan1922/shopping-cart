
var Product = require('../models/product');
var mongoose= require('mongoose');
var Products = [
  new Product({
    imagePath:'http://keytakeaways.io/wp-content/uploads/2014/10/rich-dad-poor-dad-book.jpg',
    title:'Rich Dad poor Dad',
    description:'Best book I have ever seen',
    price:'10'
  }),


  new Product({
    imagePath:'https://debeleggersgids.be/images/boek3.jpg',
    title:'A Random Walk Down Wall Street',
    description:'A Random Walk Down Wall Street, written by Burton Gordon Malkiel, a Princeton economist, is an influential book on the subject of stock markets which popularized the random walk hypothesis.',
    price:'12'
  }),
  new Product({
    imagePath:'http://contentcafe2.btol.com/contentCafe/jacket.aspx?userID=ts3app&password=ts276356&return=t&Value=9780066620596&type=L',
    title:'Image result for Stock Market Wizards Stock Market Wizards',
    description:'This decade has witnessed the most dynamic bull market in US stock history, a collapse in commodity prices, and dramatic failures in some of the world',
    price:'56'
  }),
  new Product({
    imagePath:'http://t3.gstatic.com/images?q=tbn:ANd9GcQUiMw36BEd8pEM8IdbUl9AaBzNc8TBcWvf0nppMPIYA13fV8Y6',
    title:'Learn to Earn',
    description:'An enlightening primer from the bestselling author of "Beating The Street." Many investors, including some with substantial portfolios, have only the sketchiest idea of how the stock market',
    price:'60'
  }),
  new Product({
    imagePath:'http://t1.gstatic.com/images?q=tbn:ANd9GcSJY51VRqwOdVoy26ubzu7T5acnq8fucDWyK4E1clCS2-akQyXP',
    title:'The New Reality of Wall Street',
    description:'Don Coxe has provided an excellent survival guide for understanding the financial markets of the 21st century."--David Hale, global economist, Hale Advisors LLC The New Reality of Wall Street ',
    price:'30'
  }),
  new Product({
    imagePath:'http://t2.gstatic.com/images?q=tbn:ANd9GcTnXQX6ehNZpgXJK3M7PTCXJWnIjae1r4qUoAhUlBF7gi1GyFgw',
    title:'Understanding Wall Street',
    description:'Over the past quarter century, Understanding Wall Street has helped everyone from rookie investors to Wall Street veterans understand exactly how the market works and how to determine which stocks',
    price:'20'
  })
];

var done=0;
for(var i=0; i<Products.length ; i++)
{
  //save the user
  Products[i].save(function(err) {
    if (err) throw err;
    console.log('User created!');
    done++;
    if(done == Products.length)
    {
    exit();
    }

  });
}
function exit(){
  mongoose.disconnect();
}
