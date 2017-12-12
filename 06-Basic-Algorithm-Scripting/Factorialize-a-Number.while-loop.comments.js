
function factorialize(num) {
  var factorial = 1;
    for (let n = 2; n <= num; n++) {
      factorial = factorial * n;
    }
    return factorial;
  }
factorialize(5);

/*
  Pattern: 

    0! = 1
    1! = 1
    2! = 2 * 1
    3! = 3 * 2 * 1
    4! = 4 * 3 * 2 * 1
    5! = 5 * 4 * 3 * 2 * 1
*/
