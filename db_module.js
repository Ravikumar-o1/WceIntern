
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports={

 data_fetch_ajax:function(req,res,ans){

    
    MongoClient.connect(url,{useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("web");
        var query = { branch:ans };
     
        dbo.collection("internship").find(query).sort({title:1}).toArray(function(err, result) {
          if (err) 
            console.log(err);
         
          console.log(result);
          res.send(result);
          db.close();
        });
      });

     

},

postRegister:function(req,res){

    var nam=req.body.name;
    var brh=req.body.branch;
        var mail=req.body.mail;
        var pr=req.body.prn;
        var mob =req.body.mob;
        var pass=req.body.password;
    
    console.log(nam+" "+brh+" "+mail+' '+pr+' '+mob+' '+pass);
        //res.send("<script>window.alert(''name:'+name +'<br> mail '+mail);</script>"); //res.send("<script> window.alert(\"jkuytfweff\");</script>");
        
         MongoClient.connect(url,{useNewUrlParser: true }, function(err, db) {
                if (err) throw err;
                var dbo = db.db("web");
                var myobj = {name:nam,branch:brh,email:mail,prn:pr,mobile:mob,password:pass};
                dbo.collection("student").insertOne(myobj, function(err, res) {
                if (err) throw err;
               
                db.close();
                });
            });
        
            
},
    contactPost:function(req,res){
    
    var fname=req.body.fname;
    var lname=req.body.lname;

    
        var mail=req.body.email;
      
        var phone =req.body.phone;
        var message=req.body.message;
    
    console.log(fname+' '+mail+' '+message);
        //res.send("<script>window.alert(''name:'+name +'<br> mail '+mail);</script>"); //res.send("<script> window.alert(\"jkuytfweff\");</script>");
        
         MongoClient.connect(url,{useNewUrlParser: true }, function(err, db) {
                if (err) throw err;
                var dbo = db.db("web");
                var myobj = {firstname:fname,lastname:lname,email:mail,phone:phone,message:message};
                dbo.collection("contactData").insertOne(myobj, function(err, res) {
                if (err) throw err;
               
                db.close();
                });
            });
            
        },

        internship_add_db:function(req,res){
            var post_branch=req.body.branch;
            var post_title=req.body.title;
            var post_provider=req.body.provider;
            var post_provider_info=req.body.about_internship_provider;
            var post_abt_internship=req.body.about_internship;
            var post_duration= req.body.duration;
            var post_opt_1=req.body.opt_1;
            var post_opt_2=req.body.opt_;
            var post_opt_3=req.body.opt_3;
            var post_opt_4=req.body.opt_4;
            var post_mail=req.body.mail;
            var post_mob=req.body.mob;
            var post_skills=req.body.skills;
            var post_web_link=req.body.link;
            var internship_data={
                branch:post_branch,
                title:post_title,
                provider:post_provider,
                provider_info:post_provider_info,
                about_internship:post_abt_internship,
                skills:post_skills,
                duration:post_duration,
                opt_1:post_opt_1,
                opt_2:post_opt_2,
                opt_3:post_opt_3,
                opt_4:post_opt_4,
                mail:post_mail,
                mobile:post_mob,
                link:post_web_link

            };

            
            MongoClient.connect(url, {useNewUrlParser: true },function(err, db) {
                if (err) throw err;
                var dbo = db.db("web");
                
                dbo.collection("internship").insertOne(internship_data, function(err, res) {
                if (err) throw err;
               
                db.close();
                console.log(internship_data);
               
                });
            });
            res.send("<script>window.alert('succesfully internship added'); window.location.href='/branch';</script>");
           

        },
        log_in_db:function(req,res){
            var prn=req.body.prn;
            var password=req.body.password;
            var logger={prn:prn,password:password};



            MongoClient.connect(url, {useNewUrlParser: true },function(err, db) {
                if (err) throw err;
                var dbo = db.db("web");
                
                dbo.collection("logger").insertOne(logger, function(err, res) {
                if (err) throw err;
               
                db.close();
                console.log(logger);
               
                });
            });

        },

        loggerCount:function(req,res,dat){
          //  var prnd=req.body.prn;

            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err)throw err;
                var dbo =db.db('web');
                var query={prn:dat};
                var result=dbo.collection("alumina").findOne(query);
                console.log(result);
            });
        },

        is_alumina:function(req,res){
            var ans=false;
            var prn=req.body.prn;
            var pass=req.body.password;
            MongoClient.connect(url,{useNewUrlParser:true},function(err,db){
                if(err)throw err;
                var dbo =db.db('web');
                var query={prn:prn,password:pass};
                   if(dbo.collection("alumina").find({prn:prn,password:pass}))
                        return true;





            });


        
            return false ;
        }
           
    };