//
const mongoose = require('mongoose');
const { Schema } = mongoose;


// schema
const bakerSchema = new Schema({
    name: {type: String, required: true},
    startDate: {type: Date, required: true},
    bio: {type: String},
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
});


// export
const Baker = mongoose.model('Baker', bakerSchema);
module.exports = Baker;