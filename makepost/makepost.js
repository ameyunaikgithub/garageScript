const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3614);
app.use(express.static('public'));
app.use(bodyParser.json());
app.post('/newchat', (req,res) =>{
  fs.appendFile('/home/amey/garageScript/makepost/public/data.txt',` name: ${req.body.name} comment: ${req.body.comment}\n`);
  res.send("comment recorded and saved");
});

