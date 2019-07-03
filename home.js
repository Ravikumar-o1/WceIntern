var express =require('express');
var app=express();
var fs=require('fs');
var path =require('path');
var k =require('./fun');
app.use(express.static('./'));
app.set('view engine','ejs');
app.set('views','./views')
var bodyParser =require('body-parser');
var url=require('url');
var cookieParser =require('cookie-parser');
var session =require('express-session');
var db_module=require('./db_module');
var mongoose= require('mongoose');
var Student = require('./model/student.model');
var Contact = require('./model/contact.model')
var Alumina = require('./model/alumina.model');
var Intern  = require('./model/internship.model');
mongoose.connect('mongodb://localhost:27017/web', {useNewUrlParser: true});


    
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret:'gtfeijqknqd.jfhwegfwef',saveUninitialized:true,resave:true,cookie:{maxAge:356*24*3600*1000}}));



//for getting home page 
app.get('/home',function(req,res){
    res.render('index'); 
});



// route to branch page
app.get('/branch',function(req,res){

    res.render('branch');
});
// 
// sign in page route
app.get('/signIn',function(req,res){
    res.render('log');
});
// register page
app.get("/register",function(req,res){
    res.render('register');
});

//posting data to server
app.post("/registerD",function(req,res){
    

    var stu = new Student(req.body);
    stu.save((err)=>{
        if(err) console.log(err);
        else{
            console.log('done');
            res.render('branch');
        }

    })


});

// contact form
app.post('/contactform',function(req,res){
    

    var con = new Contact(req.body);
    con.save((err)=>{
        if(err) console.log(err);
        else{
            console.log('done');
            res.send(`<script> alert("feedback given"); window.location.href='/home';</script>`);
        }
    })

});

// data of internship ajax
app.get('/branch/:br',function(req,res){

    Intern.find({branch:req.params.br},(err,data)=>{
        if(err) console.log(err);

        res.json(data);

    })

});

//user logging
app.post('/logger',function(req,res){

    Alumina.findOne({prn:req.body.prn,password:req.body.password},(err,data)=>{
        if(err){console.log(err);
            res.json(err);
        }
        else if(data==null){

            res.send(`<script>alert('user not found. Register first .......!');window.location.href='/register';</script>`)
            
        }
        else{
            console.log(data);
            res.send(`<script> alert('logged in');window.location.href='/internShip';</script>`)
            
        }


    })




});

//placement
app.get('/placement',function(req,res){
    res.render('placement');
});

var port = 8000;
app.listen(port,function()
{
    console.log(`server runing on ${port}`);
});

// add internship into database

app.post('/internShipAdd',function(req,res){

   
    var int = new Intern(req.body);

    int.save((err)=>{

        if(err) console.log(err);

        res.send(`<script> alert('done');window.location.href='/home';</script>`);

    })






});

    app.get('/',function(req,res){  
        
    res.render('index');


    });


    // internship page
    app.get('/internShip',function(req,res){
        res.render('internShip');
            
    });

// validation

app.post('/loggerValid',function(req,res){
    var dat =req.body.prn;
    var ans=db_module.loggerCount(req,res,dat);
   // if(ans==1)
     //   res.send(ans);
    //else
      //  res.send(0);

});


app.get('/about',function(req,res){
    res.render('placement');
});
