
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
