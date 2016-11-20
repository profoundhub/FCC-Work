
function bouncer(arr) {
  var filteredArray = arr.filter(Boolean);
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
