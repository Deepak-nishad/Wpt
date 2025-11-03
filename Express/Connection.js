var mysql = require("mysql2");
var exp = require("express"); 
console.log(exp)//expose one single function

//app - web application - web server
var app = exp();
console.log(app);

app.listen(9000, function () {
  console.log("exp server started at 9000");
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

app.get(('/getemps'), function (req, res) {
    con.query("Select * from emp", function (err, result) {
      if (!err) {
        result.forEach((v) => {
          res.write("<p>" + v.ENAME +" <------->"+v.JOB +"</p>");
        });
        res.end();
      }
      else{
        res.send(err);
      }
    });
  });

