// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// My solution
function getCount(str) {
    let arrStr = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (i = 0; i < arrStr.length; ++i) {
        for (j = 0; j < vowels.length; ++j) {
            if (arrStr[i] === vowels[j]) counter += 1;
          }
      } return counter;
  }