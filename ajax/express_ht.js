:const fs =require("fs");
const express =require("express");
const app=express();
app.listen(3614);
app.use(express.static('public'));
app.get('/XMLHttpRequest',(req,res)=>{
  fs.appendFile('/home/amey/garageScript/ajax/public/data.txt',`\n Name: ${req.query.username} comment: ${req.query.comment} \n `);
  res.send('done');
});



