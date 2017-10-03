/*reverse a string */

const revarr=(a,i=0, j=a.length-1,)=>{
  if (i>j)
  { 
    return a;}
  else
  {
    temp=a[i];
    a[i]=a[j];
    a[j]=temp;
   
  }
  return revarr(a,i+1,j-1);
}
console.log(revarr([1,2,3,4,5]));


