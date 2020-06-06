
const mongoose = require('mongoose')



var Search = mongoose.model('search_data',{
  
  symbol : String
  
},"search");





  module.exports = Search
  