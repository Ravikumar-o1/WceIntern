var express =require('express');
var app=express();
var fs=require('fs');



app.get("/p",function(req,res){
	res.send("heeloo");
});

