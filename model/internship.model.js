const mongoose = require('mongoose');

var intern = mongoose.Schema({

    branch:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    },
    about_internship_provider:{
        type:String,
        required:true
    },
    about_internship:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    opt_1:{
        type:String
    },
    opt_2:{
        type:String
    },
    opt_3:{
        type:String
    },
    opt_4:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model('internship',intern);