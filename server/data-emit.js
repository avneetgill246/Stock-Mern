
require('./db/mongoose.js')
const User = require('./model/stock.js')
// Load requirements
var http = require('http'),
io = require('socket.io');

// Create server & socket
var server = http.createServer(function(req, res)
{
  // Send HTML headers and message
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('<h1>Aw, snap! 404</h1>');
});
server.listen(6000);
io = io.listen(server);

// Add a connect listener
io.sockets.on('connection', function(socket)
{
  console.log('Client connected.');





  






  
  setInterval(( )=> {
    var start = new Date()
  var hrstart = process.hrtime()
  var simulateTime = 5
  setTimeout(function(argument) {
    // execution time simulated with setTimeout function
   

        //Gives localtime with seconds always 00 
        var d = new Date();
        var timeStamp = d.toLocaleTimeString('en-US', { hour12: false });
        const lac =timeStamp.slice(0,6)
        const localtime = lac+"00"
      
        //Finding all stocks with time equal to localtime (minutedata)
        User.find({ time : localtime},(err, res) =>{  
            
            if (err) {
                console.log(err)
            }
  
            //Pushing all the stock matching the stocks in watchlist into an array Allstock and emitting it 
            //Repeating it every Second              
            const AllStocks=[]     
    
                res.map(stock =>{
                  
                        let obj ={
                            symbol:stock.symbol,
                            price:stock.close,
                            open:stock.open,
                            high:stock.high,
                            low:stock.low,
                            time:new Date(stock.UnixTime).valueOf()

                        }
                        AllStocks.push(obj)
      
                    }
              )
            
          socket.emit('stock',AllStocks)
          
        })
      
      
      
          
        
 

        var end = new Date() - start,
        hrend = process.hrtime(hrstart)
    
      console.info('Execution time: %dms', end)
      console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
  }, simulateTime)


},1000)


  // Disconnect listener
  socket.on('disconnect', function() {
  console.log('Client disconnected.');
  });
});