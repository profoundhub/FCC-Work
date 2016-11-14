let getIndexToIns = (arr, num) => {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
    }
  );
  return arr.indexOf(num);
};

// readme: Algorithms\Where-do-I-belong.md
