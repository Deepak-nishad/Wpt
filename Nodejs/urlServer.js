// var h = require("http");

// var url = require("url");

// h.createServer(function (req, res) {
//   console.log("request is come ");
//   var url_parts = url.parse(req.url, true);
//   //   var url_parts=url.parse(req.url, false);
//   console.log(url_parts);
//   var uname = url_parts.query.name;
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write(`<h1 style='color:red;text-align:center'> Welcome ${uname} </h1>`);

//   res.end();
// }).listen(7000, function () {
//   console.log("Listen at 7000");
// });


var h = require("http");

var url = require("url");

h.createServer(function (req, res) {
  console.log("request is come ");
  var url_parts = url.parse(req.url, true);
  //   var url_parts=url.parse(req.url, false);
  console.log(url_parts);
  var uname = url_parts.query.num;
  const num=parseInt(uname);
  console.log(num)
  console.log(typeof(num))
  for(i=1;i<num;i++){
  
  
 if(num%i==0)
    {
        // res.writeHead(200, { "content-type": "text/html" });
         res.writeHead(200, { "content-type": "text/html" });
    // res.write(`<h1 style='color:red;text-align:center'> Welcome"${i} </h1>`);
    res.write(String(i))

    }

  }
  
  res.end();
}).listen(7000, function () {
  console.log("Listen at 7000");
});
