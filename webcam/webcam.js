
const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3614);
app.use(express.static('public'));
app.use(bodyParser.json({limit: '500mb'}));

app.post('/newchat', (req,res) =>{
  fs.appendFile('/home/amey/garageScript/webcam/public/data.txt',` name: ${req.body.name} comment: ${req.body.comment}\n`);
  res.send("comment recorded and saved");
});

app.post('/picture',(req,res) => {
  res.send('You took picture ');
});
