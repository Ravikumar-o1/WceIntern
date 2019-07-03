const mongoose = require('mongoose');
var ans = require('./alumina.model');


mongoose.connect('mongodb://localhost:27017/web', {useNewUrlParser: true});



var ap = new ans({prn:'21',password:'akki2309',email:'akki@gmail.com'});
ap.save((err)=>{
    if(err) console.log(err);

    console.log('done');
});

