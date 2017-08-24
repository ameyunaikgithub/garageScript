const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3614);
app.use(express.static('public'));
app.get('/XMLHttpRequest', (req,res) =>{
    fs.appendFile('/home/amey/garageScript/chatroom/public/data.txt',`/n name: ${req.query.Name} comment: ${req.query.Comment}`);
    res.send("your comment have been saved");
    });
