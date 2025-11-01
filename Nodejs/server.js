var h=require('http');

// console.log(h);

var server=h.createServer(function(req,res){
    console.log("server created");

    res.writeHead(200, {"content-type": " text/html"});
    console.log(req.url)
    if(req.url=="/welcome"){
        res.write("<h1> Welcome to node web server </h1>");
    }
    else if(req.url == "/login")
       res.write("<h2> Login Form </h2>");
    else
       res.write("<p> general response generated </p>");  

    res.end();

})

server.listen(2000, function(){
    console.log("Listent at 2000");
})

