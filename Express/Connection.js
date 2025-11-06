var mysql = require("mysql2");
var exp = require("express");

var app = exp();

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


app.get("/getemps", function (req, res) {
  con.query("Select * from emp", function (err, result) {
    if (!err) {
     str = "<table border=1>";
      result.forEach((v) => {
        str += "<tr>";
        str += "<td>" + v.EMPNO + "</td>";
        str += "<td>" + v.ENAME + "</td>";
        str += "</tr>";
      });
      str += "</table>";
       res.send(str)


      // result.forEach((v) => {
      //   res.write("<p>"+v.EMPNO+ "  "+ v.ENAME +"</p>");
        
      // });
  

      res.end();
    } else {
      res.send(err);
    }
  });
});
