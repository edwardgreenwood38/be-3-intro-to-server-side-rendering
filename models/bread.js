// require mongoose 
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor 
const { Schema } = mongoose;


const breadSchema = new Schema({
  name: { type: String },
  hasGluten: { type: Boolean },
  image: { type: String }
});

const Bread = mongoose.model('Bread', breadSchema);


module.exports = Bread;