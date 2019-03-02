'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdcutSchema = new Schema({
  name: {
    type: String,
    required: 'product name'
  },
  price: {
    type: String,
    required: 'product price'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    require: 'image'
  }
});

module.exports = mongoose.model('Products', ProdcutSchema);
