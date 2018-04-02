var mongoose = require('mongoose');

var Lawyerschema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    slotdate:{
            type:String,
            required: true
    },
    slottime:{
            type:String,
            required: true
    }
    
})



const Lawyer = module.exports = mongoose.model('Lawyer', Lawyerschema);