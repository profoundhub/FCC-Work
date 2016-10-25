function findLongestWord(str) {
    let string = str.split(" "), longest = 0, word = null;
    for (let i = 0; i < string.length; i++) {
        if (longest < string[i].length) {
            longest = string[i].length;
            word = string[i];
        }
    }
    return word.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
