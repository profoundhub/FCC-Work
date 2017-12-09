let palindrome = (str) => {
  
    // String.replace()
    // String.toLowerCase()
  
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"");
    return str === str.split("").reverse().join("");  
  };
  
  // alt?
  
  // palindrome("0_0 (: /-\ :) 0-0  123");

  palindrome("eye");