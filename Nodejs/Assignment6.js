//node web server - logging every request - file write
var http = require('http');
var fs = require('fs')
http.createServer(function(req,res) {
     //response send back
     //write data in some file
     if(req.url !== '/favicon.ico') {
         var str = "Request received for "+req.url+" at "+new Date().toString()+"\n";
         fs.appendFile("log.txt", str, function(err){
            if(!err)
              console.log("log generated");
            else
  	      console.log("log generation failed");
         })  
     }   
 
     res.writeHead(200, {"content-type":"text/html"} ); 
     res.write("<h3>Request is logged </h3>");
     res.end();

}).listen(9000, function() {
    console.log("logging server started on 9000");
} );
