const User = require('./model/stock.js')


User.find({}, function(err, foundjobs) {
    if(err) {
        console.log('error')
    } else {
      
    
    var a = [];
    foundjobs.forEach((element) => {
      var symbol= element.symbol
      a.push(symbol)
      
    });
    // usage example:
    
    
    const uniqueAges = [...new Set(a)]
    b=uniqueAges.length
    console.log(b)
    uniqueAges.forEach(element => {
       
      
      var book1 = new Search({ symbol: element});
 
    // save model to database
    book1.save(function (err, book) {
      if (err) return console.error(err);
      
    })


     });
    
     
    }
  })