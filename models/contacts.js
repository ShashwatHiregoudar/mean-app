var mongoose = require('mongoose');

var contactschema = mongoose.Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    }
})