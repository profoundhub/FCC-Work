let factorialize = (num) => {
 let factorial = 1;
  for (let n = 2; n <= num; n++) {
    factorial = factorial * n;
  }
  return factorial;
};
factorialize(5);

/*

function factorialize(num) {
 var factorial = 1;
  for (let n = 2; n <= num; n++) {
    factorial = factorial * n;
  }
  return factorial;
}
factorialize(5);

*/
