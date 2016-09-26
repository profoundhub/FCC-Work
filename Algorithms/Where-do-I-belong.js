// Where do I belong ?

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.

  // Push Num into Array

  arr.push(num);

  // Sort Array

  arr.sort(function(a, b) {
    return a - b;
    }
  );

  // get Index of Num.

  return arr.indexOf(num);

  // console.log(arr);
  
}

// readme: Algorithms\Where-do-I-belong.md
