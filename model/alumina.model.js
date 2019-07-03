const mongoose = require('mongoose');
var alumina  = mongoose.Schema({

    prn:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    ,
    email:{
        type:String,
        required:true
    }
})
var ans ="";
module.exports =ans = mongoose.model('alumina',alumina);
