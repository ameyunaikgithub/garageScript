/*printhi after custom interval of time */
const  custint= (a,i=0)=>{
  const printhi= ()=>{
    console.log("HI");
  }
    
  if (i==a.length){
    console.log("valueof i" + i);
    //    clearInterval(custint);
    return;
  }
  else
  {
    setTimeout(function(){printhi()},a[i]*1000);
    // clearInterval(custint);
  console.log("a[i]" +a[i]);
  }

return custint(a,i+1);
}
custint([5,10,15]);
