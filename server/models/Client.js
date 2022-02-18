const { model, Schema } = require('mongoose');

const clientSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    company: String, 
    position: String,
    interests: [String]
});

module.exports = model('Client', clientSchema);
