const { model, Schema } = require('mongoose');

const clientSchema = new Schema({
    name: String,
    email: String,
    company: String, 
    position: String,
    desc: String
});

module.exports = model('Client', clientSchema);
