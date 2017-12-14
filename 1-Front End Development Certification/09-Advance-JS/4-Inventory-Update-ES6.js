
let updateInventory = (arr1, arr2) => {    
    let arrayFind = (value, origin, index) =>  {
          return (origin.findIndex((a, b) => 
            a[index] === value
          ));
    };
    for (let i in arr2) {
      let index = arrayFind (arr2[i][1], arr1, 1);
      if (index === -1) {
        arr1.push(arr2[i]);
      } else {
        arr1[index][0] += arr2[i][0];
      }
    }      
    return arr1.sort((a,b) => a[1] > b[1]);
};

// Example Inventory Lists
let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
