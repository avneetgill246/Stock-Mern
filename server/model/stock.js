const mongoose = require('mongoose')
var Schema = mongoose.Schema;


var personSchema = new Schema({
    _id  :{ type :String},
    symbol :{ type :String},
    date:{type:Date},
    time:{ type :String},
    open: {type:Number},
    high: {type:Number},
    low: {type:Number},
    close: {type:Number},
    volume: {type:Number},
    StringDate:{type:String},
    StringTime:{type:String},
    UnixTime:{type:String}

  });

var User = mongoose.model('stock_data',personSchema,"daily_data");


personSchema.virtual('timestamp').get(function () {
    return this.date + 'T' + this.time + '.000Z';
  });
 

module.exports = User