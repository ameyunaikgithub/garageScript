/*count no of times a number in an array */

const repeat = (num,arr,count=0,i=0)=>{
if(i==arr.length)
  {
  return count;
}
if(num==arr[i])
  {
    count=count+1;
  }

return repeat(num,arr,count,i+1);
}
console.log(repeat(5,[1,5,5,5,6]));
