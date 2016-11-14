// Seek and Destroy
let destroyer = (arr) => {
  let arg = Array.prototype.slice.call(arguments);
  arg.splice(0,1);
  return arr.filter(function(element) {
    return arg.indexOf(element) === -1;
  });
};

destroyer([1, 2, 3, 1, 2, 3], 2, 3);