/*remove lo from hello*/

const remstr = (str1,str2,nstr="",i=0,j=0)=>{
  if(i==str1.length-1)
  {
console.log (nstr);
    return nstr;
  }
  else
  {
    if(str1[i]!==str2[j] && str1[i]!==str2[j+1])
    {
      nstr=nstr+str1[i];
      console.log("nstr"+ nstr);
    }
  }
  return remstr(str1,str2,nstr,i+1);
}
console.log(remstr("hello","lo"));


