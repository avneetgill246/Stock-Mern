const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
require('./db/mongoose.js')
const User = require('./model/stock.js')
const Watchlist = require('./model/user_watchlist.js')
const searchRouter = require('./router/search-router')

const Search = require('./model/search.js')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDir = path.join(__dirname, '../front')

app.use(express.static(publicDir))
app.use(searchRouter)



io.on('connection', (socket) => {
    console.log('New Connection')
   

    Watchlist.find({},(err,respo)=>{
       if(err){
           console.log(err)
       } 
    
        socket.emit('result',respo)
       
       
     })

    socket.on('search',(result)=>{
       const rel= result
      
     
        if(rel){
            Search.findOne({symbol:rel},(err,res)=>{
                if(res){
                    let obje = {
                        symbol:rel
                    }
                    const searchNew = new Watchlist(obje)
                    searchNew.save().then(()=>{
                        Watchlist.find({},(err,respo)=>{
                            if(err){
                                console.log(err)
                            }
                          
                           socket.emit('result',respo)
                        })
                    }).catch((err)=>{
                        console.log(err)
                    })
                    
                }
               
                
            })

        }
      
      })

      
      
      setInterval(( )=> {

        var d = new Date();
        var timeStamp = d.toLocaleTimeString('en-US', { hour12: false });
        const lac =timeStamp.slice(0,6)
        const localtime = lac+"00"
       
      
    
            User.find({time : localtime},(err, res) =>{
                if (err) {
                    console.log(err)
                }                                            
            
            
                for (var i = 0, len = res.length; i < len; i++){
                    const id =res[i].symbol
                    const fd =res[i].close 
                    socket.emit('id'+id,fd)
                    
                                     
                        
                    }
            
                    
                                  
                })
         
               
})

        ,1000})
               
                


            


    
  
   


User.findOne({UnixTime:'2020-04-01T09:29:00.000Z'},(err,res)=>{
    
    ab=res.UnixTime
    
})


server.listen(port)

