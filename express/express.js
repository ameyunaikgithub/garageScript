const fs = require("fs");
const express = require("express");
const app = express();
app.listen(3614);
const executeApp = (req,res)=>{
    const printFunc=(err,files)=>{
          let allNames = " ";
          files.forEach((name)=>{
                  if(name!="amey")
                      allNames = allNames + " " +name;
                });
          res.send(allNames);
        };
    fs.readdir("/home", printFunc);
};
app.get("/name", executeApp);
