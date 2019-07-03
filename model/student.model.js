const mongoose= require('mongoose');
var student = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    branch:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    prn:{
    	type: String,
    	required: true
    },
    mobile:{
    	type: String,
    	required: true
    },
    password:{
    	type: String,
    	required: true
    }
});

module.exports = mongoose.model('student', student);