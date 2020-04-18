let mongoose = require('mongoose');

// Define the User Schema
let userSchema = mongoose.Schema({
    
    email: String,
    firstname: String,
    lastname: String

});


module.exports = mongoose.model('User', userSchema);