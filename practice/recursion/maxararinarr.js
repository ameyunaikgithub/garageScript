/*max arr in an array*/
const findMax = (arr ,i=0, max=arr[i]) => {
  if(i==arr.length)
  {
    return max;
  }
  if(max < arr[i])
  {
    max=arr[i];
  }
  return findMax(arr,i+1,max);
}

const Maxarr=(arr1,ind=0,resarr=[])=>{
  if(ind==arr1.length)
  {
    return resarr;
  }
  else
  {
    resarr.push(findMax(arr1[ind]));
  }
  return Maxarr(arr1,ind+1,resarr);
}
console.log(Maxarr([[1,2,3],[4,5,6]]));

