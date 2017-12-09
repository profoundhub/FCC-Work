let palindrome = (str) => {

  // Merge lines
  // str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"");

  return str === str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,"").split("").reverse().join("");  
};

palindrome("eye");