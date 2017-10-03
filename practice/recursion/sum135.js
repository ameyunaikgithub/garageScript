/*add all elements in anarray*/

const sum1 = (a,i=0,sum=0)=>{
   
  if (i==a.length){
    
   console.log(sum)
  }
  else
  {
    sum=sum+a[i];
    sum1(a,i+1,sum);
  }
}
sum1([1,3,5])
