# Truncate a string 

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

## Tests

* truncateString("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
* truncateString("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
* truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
* truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
* truncateString("A-", 1) should return "A...".
* truncateString("Absolutely Longer", 2) should return "Ab...".

### Source:
https://www.freecodecamp.com/challenges/truncate-a-string

### Mine:
https://www.freecodecamp.com/challenges/truncate-a-string#?solution=%22use%20strict%22%3B%0Alet%20truncateString%20%3D%20(str%2C%20num)%20%3D%3E%20%7B%0A%20%20%0A%20%20if%20(str.length%20%3E%20num%20%26%26%20num%20%3E%3D%203)%20%7B%0A%20%20%20%20str%20%3D%20str.slice(0%2Cnum%20-%203)%20%2B%20%22...%22%3B%0A%20%20%7D%20else%20if%20(%20num%20%3C%3D%203)%20%7B%0A%20%20%20%20str%20%3D%20str.slice(0%2Cnum)%20%2B%20%22...%22%3B%20%20%20%20%20%20%0A%20%20%7D%0A%20%20return%20str%3B%0A%7D%3B%0A%0AtruncateString(%22A-%22%2C%201)%3B%0A