/*print an array without the number */
const remove = (num,arr,newarr=[],i=0)=>{
  if (i==arr.length)
  {
    return newarr;
  }
  else
  {
    if(num!=arr[i]){
      newarr.push(arr[i]);
  }
}
return remove(num,arr,newarr,i+1);
}
console.log(remove(5,[1,5,5,6]));
