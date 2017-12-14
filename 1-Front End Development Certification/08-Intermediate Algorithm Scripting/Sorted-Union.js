// Sorted Union

function uniteUnique(arr1, arr2, arr3) {
  
  var specialArray = [];
  
  // First Loops  
  
  for (var i=0; i<arguments.length; i++) {
    var arrArg = arguments[i];    
    
  // More Loops ?  
  for (var j=0; j<arrArg.length; j++) {
    var indexVal = arguments[i][j]; 
    
    // Another Loop!  
    
    if (specialArray.indexOf(arguments[i][j]) ===-1) {      
      specialArray.push(indexVal);
    }
    
  } // More Loop (Second)
  
//  Array.sort();
}  
  // return arr;
  return specialArray;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // for ()
