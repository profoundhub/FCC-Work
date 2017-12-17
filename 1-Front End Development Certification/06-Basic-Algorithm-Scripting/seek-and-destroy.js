// Seek and Destroy
let destroyer = (arr) => {
  let elements = Array.prototype.slice.call(arguments);
  elements.splice(0,1);
  return arr.filter(function(element) {
    return elements.indexOf(element) === -1;
  });
};

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);