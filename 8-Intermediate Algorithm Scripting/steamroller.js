"use strict";
let myArray = [];
let steamrollArray = (arr) => {
  let firstArray = [];    
  flatArr(arr);  
  let flatArr = (arr) => {
    arr.forEach(function(arr2nd) {
    if (!Array.isArray(arr2nd )) {
      firstArray.push(arr2nd);     
    } else {
       flatArr(arr2nd);
    }   
  });
};
  return firstArray; // myArray;
};
steamrollArray([1, [2], [3, [[4]]]]);
