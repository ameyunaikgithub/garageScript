/*check if number is in array*/
const inarray=(a,num,i=0)=>{
  if(i==a.length)
  {
    return false;
  }
  if (a[i]!=num)
  {
return inarray(a,num,i+1)

  }
  else
  {
    return true;
  }
}
console.log(inarray[1,2,9],2)
