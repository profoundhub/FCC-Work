let repeatStringNumTimes = (str, num) => {  
  let addedStr='';
  while (num>0) {
    addedStr += str;
    num--;
  }
  return addedStr;  
}
repeatStringNumTimes("abc", 3);
