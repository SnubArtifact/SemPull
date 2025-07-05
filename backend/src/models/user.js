const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        validate: {
          validator: function(email) {
        
          return email.toLowerCase().endsWith('@pilani.bits-pilani.ac.in');
      },
      message: 'Only BITS Pilani emails (@pilani.bits-pilani.ac.in) are allowed!',
    },
    },

    password:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    
})

module.exports = mongoose.model('User',UserSchema);