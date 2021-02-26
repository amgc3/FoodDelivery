const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true 
      },
    password: String,
    email: String,
    telephone: String,
    name: String,
    surname: String,
    address: String,

})

module.exports = mongoose.model('User', UserSchema)