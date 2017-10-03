/* remove duplicate */
const removeextra = (str,i=0,prev="",fstr="")=>{
  if (i===str.length)
    return fstr;
  if(str[i]!==prev)
  {
    fstr=fstr+str[i];
  }

  return removeextra(str,i+1,str[i],fstr)
}
console.log(removeextra("hellloo"))
