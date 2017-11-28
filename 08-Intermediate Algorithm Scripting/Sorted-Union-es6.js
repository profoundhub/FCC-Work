const uniteUnique = (arr1, arr2, arr3) => {  
  var specialArray = [];  
  
  for (let i=0; i<arguments.length; i++) {
    var arrArg = arguments[i];        
  
  for (let j=0; j<arrArg.length; j++) {
    var indexVal = arguments[i][j]; 
    
    if (specialArray.indexOf(arguments[i][j]) ===-1) {      
      specialArray.push(indexVal);
    }    
  }
}  
  return specialArray;
};
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
