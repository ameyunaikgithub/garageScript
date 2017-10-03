/* check if number 9 is in array */

const inarr = (a,i=0)=>{
  if (i==a.length)
  {
    return false;
  }
  else
  {
    if(a[i]==9)
    {
return true;
    }

  }
  return inarr(a,i+1)

}
console.log(inarr([1,3,5,9]))


   
