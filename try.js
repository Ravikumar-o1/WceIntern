var http= require('http');
var fs= require('fs');

http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('header.html',function(err,data){
        if(err)console.log('daar lost');
        var d="<form action=\"/home\" method=\"post\"><input type=\"text\" ><input type=\"submit\"></form>";
        res.write(data+d);
        res.end();
    });

}).listen(8080);