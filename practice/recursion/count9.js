/*count no 9 in string*/

const count9 = (string,i=0,coun=0)=>{
  console.log("the i now is "+i);
  if (i==string.length){
    console.log("the count now is "+coun) ;
    return ;
  }
  else
  {
    if ( string[i]==9){
    coun=coun+1;
    console.log("count update "+coun);
      //        i=i+1;
      //    count9(string,i);

    }
    count9(string,i+1,coun);
    
  }
}
count9("5son9birt9")
