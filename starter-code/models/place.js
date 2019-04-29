const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const placeSchema = new Schema({
  name: {type: String},
  type: {type: String, enum:['coffee shop', 'bookstore']},
  timestamps: {type: Date, default: Date.now}
});

const Place = mongoose.model('Place');

module.exports = Place;
