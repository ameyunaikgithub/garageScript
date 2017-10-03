/*Print string number of times mentioned*/
const createStr = (num,string,i=0)=>{
   let str= " ";
  if (i==num){
    console.log(str) ;
  }
  else
  {
    str=str+string;
console.log(str);
    i=i+1;
    createStr(num,string, i);

  }
}
createStr(6,"string")
