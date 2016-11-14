function complement(a, b) {
    return a.filter(function(elem) { return b.indexOf(elem) == -1; });
}
/*
function unique(arr) {
  return arr.filter(function(elem, pos) {
    return arr.indexOf(elem) == pos;
  });
}

function sym(args) {
    var arg = [].slice.call(arguments);
    return arg.map(unique).reduce(function(pre, cur) {
        return complement(pre, cur).concat(complement(cur, pre)); });
} */

sym([1, 2, 3], [5, 2, 1, 4]);
