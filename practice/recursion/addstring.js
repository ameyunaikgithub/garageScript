/*add two arrays */
const addstr=(ar1,ar2,i=0)=>{
  if(i==ar2.length)
  {
console.log(" if ar1" + ar1);
    return ar1;

   }
  else
  {
    ar1.push(ar2[i]);
    console.log(" else ar" + ar1);

  }
  return addstr(ar1,ar2,i+1);
}
console.log(addstr([1,2,3],[4,5,6]));


