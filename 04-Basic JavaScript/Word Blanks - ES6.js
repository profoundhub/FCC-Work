// Word Blanks - ES6
// Surprising, this works!

let wordBlanks = (myNoun, myAdjective, myVerb, myAdverb) => {
  let result = "";
  
  // Your code below this line
  result = `The ${myNoun} was ${myAdjective}, but ${myVerb} very ${myAdverb} .`;

  // Your code above this line
  return result;
};

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
