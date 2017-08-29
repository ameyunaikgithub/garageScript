const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3614);
app.use(express.static('public'));
app.get('/newchat', (req,res) =>{
  fs.appendFile('/home/amey/garageScript/chat/public/data.txt',` name: ${req.query.Name} comment: ${req.query.Comment}\n`);
  res.send("comment recorded and saved");
});

