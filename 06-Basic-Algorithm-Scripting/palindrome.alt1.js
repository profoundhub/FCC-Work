let palindrome = (str) => {
  
  // String.replace()
  // String.toLowerCase()

  str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"");
  return str === str.split("").reverse().join("");

  let string = "0_0 (: /-\ :) 0-0";
  // console.log("string");
  string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"").split("").reverse().join("");
  // console.log("string");
  return string;
};
  
// palindrome("0_0 (: /-\ :) 0-0  123");

palindrome("eye");