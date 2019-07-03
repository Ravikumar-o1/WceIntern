var express =require('express');
var app=express();
var fs=require('fs');
var path =require('path');
app.use(express.static('C:\\Users\\Ravi Navale\\webProject'));


app.post("/contactform",function(req,res){

    console.log("behjfjbe");
})


app.listen(8080);
    