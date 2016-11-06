function repeatStringNumTimes(str, num) {  
  var addedStr='';
  while (num>0) {
    addedStr += str;
    num--;
  }
  return addedStr;  
}
repeatStringNumTimes("abc", 3);
