function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // var str_under = str.replace(/_/g, ' ');
  // return str_under.replace(/([_])([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase().trim().split(/\s+/).join('-');
  
   str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Split on whitespaces and underscores + join with a hyphen
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
  
  // String.prototype.replace() ?  
  
}
spinalCase('This Is Spinal Tap');
