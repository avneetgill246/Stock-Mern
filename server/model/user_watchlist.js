const mongoose = require('mongoose')
var Schema = mongoose.Schema;


var personSchema = new Schema({
    
    symbol :{ type :String},
 

  });

var Watchlist = mongoose.model('watchlist-data',personSchema,"watchlist");




module.exports = Watchlist