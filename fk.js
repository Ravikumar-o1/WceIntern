
    var express =require('express');
    var app =express();
    var bodyParser =require('body-parser');
    
    
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    app.use(express.static('C:\\Users\\Ravi Navale\\webProject'));
    
    app.post('/registerD',function(req,res){
        var nam=req.body.name;
        var brh=req.body.branch;
        var mail=req.body.mail;
        var pr=req.body.prn;
        var mob =req.body.mob;
        var pass=req.body.password;
    
        console.log(nam+" "+brh+" "+mail+' '+pr+' '+mob+' '+pass);
        //res.send("<script>window.alert(''name:'+name +'<br> mail '+mail);</script>"); //res.send("<script> window.alert(\"jkuytfweff\");</script>");
        
         MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("web");
                var myobj = {name:nam,branch:brh,email:mail,prn:pr,mobile:mob,password:pass};
                dbo.collection("student").insertOne(myobj, function(err, res) {
                if (err) throw err;
               
                db.close();
                });
            });
           
            res.redirect('/home');        
    });
    

    app.get('/home',function(req,res){
        res.sendFile('C:\\Users\\Ravi Navale\\webProject\\index.html');
    });
    
    app.listen(8080);
    
    
