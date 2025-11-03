var exp = require('express'); 
var mysql = require("mysql2");
var app = exp();


app.listen(9000, function(req,res){
    console.log("server startrd")
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Deepak@123",
  database: "Assignments_knowit",
});


con.connect(function (err) {
  if (!err) {
    console.log("Data base connected");
  } else {
    console.log(err);
  }
});


app.get('/greet', function(req, res){
    res.send("<p>" + "hello Deepak good evening"+ " "+ new Date()+"<p/>");
});

app.get('/login', function(req, res){
    res.sendFile(__dirname+"/login.html");
});

app.get('/logincheck', function(req, res){
    var user=req.query.uid;
    var pass=req.query.pass;
    console.log(user);
    console.log(pass)

    if(user==="deepak" && pass==="Deepak@123")
    {
           res.send("<h3> Login successful  </h3>");
    }
    else{
        //res.send("<p> Login failed </p> "); 
       res.redirect("/login");
    }

 
});

app.get(('/register'), function (req, res) {
     var sql = "CREATE TABLE login (FirstName VARCHAR(50), LastName VARCHAR(50))";
    con.query(sql, function (err, result) {
      if (!err) {
      
          res.write("<p>" + "Table created" +"</p>");
     
        res.end();
      }
      else{
        res.send(err);
      }
    });
  });

