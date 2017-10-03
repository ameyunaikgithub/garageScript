/*compare two arrays if equal*/
const comp = (a1,a2,i=0,j=0)=>{
  if(i==a1.length && j==a2.length)
  {
    return true;
  }
  else
  {
    if(a1[i]!==a2[j])
    {
      return false;
    }
  }
  return comp(a1,a2,i+1,j+1);
}
console.log(comp([1,2,3],[1,2,3]));
