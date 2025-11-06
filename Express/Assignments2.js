var exp = require("express");
var mysql = require("mysql2");
var bp = require("body-parser");
// console.log(bp);

var app = exp();

app.use(exp.static("pics"));
app.use(bp.urlencoded({ extended: false }));

app.listen(9000, function (req, res) {
  console.log("server startrd");
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Deepak@123",
  database: "shoppingdb",
});

con.connect(function (err) {
  if (!err) {
    console.log("Data base connected");
  } else {
    console.log(err);
  }
});

app.get("/greet", function (req, res) {
  res.send("<p>" + "hello Deepak good evening" + " " + new Date() + "<p/>");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.get("/register", function (req, res) {
  res.sendFile(__dirname + "/register.html");
});

app.get("/logincheck", function (req, res) {
  var user = req.query.uid;
  var pass = req.query.pass;
  console.log(user);
  console.log(pass);

  if (user === "deepak" && pass === "Deepak@123") {
    res.send("<h3> Login successful  </h3>");
  } else {
    //res.send("<p> Login failed </p> ");
    res.redirect("/login");
  }
});

app.post("/logincheckwithdb", function (req, res) {
  var user = req.body.uid;
  var pass = req.body.pass;
  console.log(user);
  console.log(pass);

  var sqlquery = `select * from users where u_id = ? and password = ?`;

  con.query(sqlquery, [user, pass], function (err, result) {
    console.log(result.length);

    if (!err) {
      if (result.length) {
        console.log(result);
        res.write("<h1> Welcome " + result[0].fname + "</h1>");
        res.write("<p>Login succesful</p>");
        res.end();
      } else {
        // res.redirect("/login");
        res.redirect("/register");
      }
    } else {
      res.write("Failed to write");
    }
  });
});

app.post("/registerindb", function (req, res) {
  var fname = req.body.firstName;
  var lname = req.body.lastName;
  var email = req.body.email;
  var pass = req.body.password;
  var unumber = req.body.mobileNumber;

  console.log(fname + " " + lname + " " + email + " " + pass + " " + unumber);

  var sqlquery = `INSERT INTO users (u_id, password, fname,mname, lname, email, contact) VALUES (?, ?, ?, ?,?, ?,?)`;
  var values = [fname, pass, fname,fname, lname, email, unumber]; // make sure these variables are defined

  con.query(sqlquery, values, function (err) {
    if (!err) {
      console.log("Data submitted");
    } else {
      console.log("Error: ", err);
    }
  });

});
