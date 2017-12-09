
let reverseString = (str) => {

  var arr = str.split('');
  arr.reverse();
  arr.join();  
  
  return arr;

};

reverseString("hello");

/*
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  reverseString("hello");
*/
/*
One Line Answer:
let reverseString=(str)=>{return str.split('').reverse().join('');};reverseString("hello");
*/


