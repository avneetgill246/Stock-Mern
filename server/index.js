const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const User = require('./model/stock.js')
const io = require('socket.io-client')
const InSocket = io.connect('http://localhost:6000', {reconnect: true});

require('./db/mongoose.js')

const PORT = process.env.PORT || 5000;

//const router = require('./router') 

const app = express();
const server = http.createServer(app);
const OutSocket = socketio(server)


// Incoming Socket from data-emit.js
var i=1
InSocket.on('connect', function(soc) { 
  console.log('Connected!');


//Outgoing Socket to React client
var j=1
OutSocket.on("connection",(socket)=>{
  console.log('connected ',j)
  j++;


  InSocket.on('stock',(res)=>{
    
    socket.emit('allstocks',res)



  })

})


});





server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))