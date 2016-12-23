function truncateString(str, num) {
  // var truncatedStr = '';
  
  // if (str.length > num) {
    // str = str.slice(0,num-3);
//    str +="...";
  
  
    if (str.length > num && num >= 3) {
        str = str.slice(0,num - 3) + "...";
    } else if ( num <= 3) {
        str = str.slice(0,num) + "...";
      
    
  // if (str.length > num) {
    // truncateStr = str.slice(0, num - 3)+'...';
    // return truncateStr;
  // } else if (str.length < num) {
    // truncateStr = str.slice(0, num - 3) + '...';
    // return truncateStr;
  }
  return str;
}
truncateString("A-", 1);

//truncateString("Peter Piper picked a peck of pickled peppers", 14);
//truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);