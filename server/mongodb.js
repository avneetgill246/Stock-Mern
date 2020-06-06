const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'data'

MongoClient.connect(connectionURL,{useNewUrlParser: true , useUnifiedTopology: false  }, (error, client) => {
    if(error){
        return console.log(error)
    }

    console.log('connected')
})