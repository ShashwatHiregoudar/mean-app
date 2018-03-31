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
    slot:{
        date:{
            type:String,
            required: true
        },
        time:{
            type:String,
            required: true
        }
    }
})



const Lawyer = module.exports = mongoose.model('Lawyer', Lawyerschema);