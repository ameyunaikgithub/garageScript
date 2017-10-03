/*print hello number of times*/
const printhello = (numPrint,i=0)=>{
   let HelloString= " ";
  if (i==numPrint){
    console.log(HelloString) ;
  }
  else
  {
    HelloString=HelloString+"Hello";
console.log(HelloString);
    i=i+1;
    printhello(numPrint, i);

  }
}
printhello(6)
