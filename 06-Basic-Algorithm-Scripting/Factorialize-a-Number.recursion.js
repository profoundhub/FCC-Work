
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
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
