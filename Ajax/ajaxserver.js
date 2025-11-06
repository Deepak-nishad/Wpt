var exp = require('express');
var mysql = require('mysql2');

var app = exp();

app.use(exp.static("scripts"));

app.listen(9000, function(req,res) {
   console.log("exp server - all");
})

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Deepak@123",
    database:"quizdb"
});
con.connect(function(err){
   if(!err)
      console.log("connected");
   else
      console.log("rejected : "+err.toString());
});

app.get('/getQuestions', function(req, res){
     var qid = req.query.catid;
     console.log(qid);
     //db comm
     con.query("select * from questions where topicid = ?",[qid],function(err,result) {
          if(!err) {
              //JSON string gets send back to client as response
              console.log(result)
              console.log(JSON.stringify(result))
	      res.send(JSON.stringify(result));
       
            //    res.json(result);	
          }
     })
})