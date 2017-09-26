//yolo
const express = require("express");
const fs = require ("fs");
const app = express();
const bodyparser = require('body-parser');
const gm = require('gm');

app.listen(3614);
app.use(express.static('public'));
app.use(bodyparser.json({limit:'500mb'}));

/* response when first button is clicked*/

app.post('/amey',(req,res) => {
  fs.appendFile('/home/amey/garageScript/meme/public/data.txt',`Name: ${req.body.name} Comment : ${req.body.comment}`);
});


/*response of button 2*/
app.post('/picture',(req,res)=>{
  let picData = req.body.data.replace('data:image/png;base64');
  let picPath = `/home/amey/garageScript/meme/public/pics/${req.body.name}.png`;
  let memePath = `/home/amey/garageScript/meme/public/meme/${req.body.name}.png`;
  /* we call it an empty function inside a function since we are dealing with image files and allowing some time to get the image  uploaded*/
  fs.writeFile(picPath,picData, 'base64' ,() => {
    gm(picPath).fontSize(40).drawText(50,50,req.body.comment).write(memePath, ()=>{});
});
});
