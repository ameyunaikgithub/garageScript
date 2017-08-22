const f = require('fs');

const read = (err,files)=>{
      let names = '';
      const find= (element)=>{
              if(element !=='amey'){
                        names = names + element + '\n';
                      }
            }
    files.forEach(find);
    console.log(names);
}
f.readdir('/home', read);
