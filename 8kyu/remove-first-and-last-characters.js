// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// My solution
function removeChar(str) { // world [0, 1, 2, 3, 4]
  var newstr = "";
   for (i = 1; i <= str.length - 2; ++i) { // i = 1; 3; 
     newstr += str[i];                    // str[1] + str[2] + str[3], 3 < 3 -> end
   } return newstr;
 }; 
 