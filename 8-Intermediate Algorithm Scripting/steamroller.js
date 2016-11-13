
var myArray = [];

function steamrollArray(arr) {
  // I'm a steamroller, baby
  
  // Let's get rid of all other arrays ...
  firstArray = [];
  flatArr(arr);
  
  function flatArr(arr) {
    arr.forEach(function(arr2nd ) {
    
    if (!Array.isArray(arr2nd )) {
      firstArray.push(arr2nd);      
      
    } else {
       flatArr(arr2nd);
  
      
    }   
  });
}
  
  
  return firstArray; // myArray;
  
}  
  
  steamrollArray([1, [2], [3, [[4]]]]);
  
  

/*  

  // I'm a steamroller, baby
  
  // Let's get rid of all other arrays ...


  for (var i = 0; i<arr.length; i++) {
    
    if (!Array.isArray(arr[i])) {      
      myArray.push(arr[i]);      
      
    } else {
      
      steamrollArray(arr[i]);      
    }
  }  
  return myArray;
}

steamrollArray([1, [2], [3, [[4]]]]);

*/
// steamrollArray([[["a"]], [["b"]]]);
// steamrollArray([1, {}, [3, [[4]]]]);
