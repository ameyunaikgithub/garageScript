const fs =require("fs");
const express =require("express");
const app=express();
app.listen(3614);
app.use(express.static('public'));
app.get('/form',(req,res)=>{
    const name=req.query.username;
    const comment=req.query.comment;
    fs.writeFile('/home/amey/garagescript/public/data.txt',"hello"+" "+ name+" "+ comment);
    res.send('done');
});
