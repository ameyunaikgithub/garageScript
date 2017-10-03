/*find max num in array */
const maximum = (a,i=0)=>{
  if (i==a.length-1){
   console.log(max);
  }
  else
  {
    if( a[i]< a[i+1])
    {
    max=a[i+1];
maximum(a,i+1,max);
  console.log(max);
    }
  }
}
maximum([5,46,15,26]);
