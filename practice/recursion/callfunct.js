/*call function the number times*/

const funct =()=>{
   console.log("hi");
 }
const call = (num,i=0) =>{
  if (i==num)
  {
    return;
  }
  else
  {
    funct();
  }
  return call(num,i+1);
}
call(3);
