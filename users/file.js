const f = require('fs');

const read = (err,files)=>{
      let names = '';
      const find= (e)=>{
              if(e !=='amey'){
                        names = names + e + '\n';
                      }
            }
    files.forEach(find);
    console.log(names);
}
f.readdir('/home', read);
