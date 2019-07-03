var express =require('express');
var app=express();
var fs=require('fs');
var path =require('path');
var k =require('./fun.js');
app.use(express.static('./'));
app.set('view engine','ejs');
app.use('views','./views')
var bodyParser =require('body-parser');
var url=require('url');
var cookieParser =require('cookie-parser');
var session =require('express-session');
var db_module=require('./db_module');

    
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret:'gtfeijqknqd.jfhwegfwef',saveUninitialized:true,resave:true,cookie:{maxAge:356*24*3600*1000}}));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//for getting home page 
app.get("/home",function(req,res){
 
    res.render('index');
  
    
});



// route to branch page
app.get('/branch',function(req,res){

    res.sendFile('C:\\Users\\Swapnil\\webProject\\generic.html');
});
// 
// sign in page route
app.get('/signIn',function(req,res){
    res.sendFile(__dirname +'/log.html');
});
// register page
app.get("/register",function(req,res){
    res.sendFile('C:\\Users\\Swapnil\\webProject\\register.html');
});

//posting data to server
app.post("/registerD",function(req,res){
    //res.sendFile('C:\\Users\\Ravi Navale\\webProject\\register.html');
  //  k.postRegister(req,res,url,MongoClient);
  db_module.postRegister(req,res);
    res.send("<script>window.alert('successfully registerred...........!'); window.location.href='/home';</script>");

});

// contact form
app.post('/contactform',function(req,res){
    db_module.contactPost(req,res);
    var data="<script> window.alert('sucessfully contact send');window.location.href='/';</script>";
    res.send(data);
});

// data of internship ajax
app.get('/branch/:br',function(req,res){

    var ans=req.params.br;
     db_module.data_fetch_ajax(req,res,ans);


});

//user logging
app.post('/branch/logger',function(req,res){

    console.log(db_module.is_alumina(req,res));
    if(db_module.is_alumina(req,res)){
        console.log('dokjfheje');
        db_module.log_in_db(req,res);       
    req.session.prn=req.body.prn;
    if(req.session.prn){
    res.send("<script>window.alert('"+req.session.prn+".......!');window.location.href='/internShipPage'</script>");
    }
    
    else{
        res.send("<script>window.alert('Please log in again........!');window.location.href='/signIn'</script>");
    }
}
else{
    res.send("<script>window.alert('Invalid username or password........!');window.location.href='/signIn'</script>");

}

});

//placement
app.get('/placement',function(req,res){
    res.sendFile('C:\\Users\\Swapnil\\webProject\\placement.html');
});


app.listen(8080,function()
{
    console.log('done .........!');
});

// add internship into database

app.post('/internShipAdd',function(req,res){

    db_module.internship_add_db(req,res);
});

    app.get('/',function(req,res){  
        
    fs.readFile('C:\\Users\\Swapnil\\webProject\\index.html',function(err,data){
                if(err)throw err;
                var ans="<script> window.alert('done.......!');</script>";
                data =ans+data;
                res.send(data);
            });


    });


    // internship page
    app.get('/internShipPage',function(req,res){
        res.sendFile('C:\\Users\\Swapnil\\webProject\\internShip.html');
            
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
    res.sendFile('C:\\Users\\Swapnil\\webProject\\elements.html');
});
