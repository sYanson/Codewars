// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// My solution
function removeChar(str) { // world [0, 1, 2, 3, 4]
 let newstr = "";
 for (i = 1; i < str.lenght - 2; ++i) { // i = 1; i < 5 - 2; ignore, 2, 3
   newstr += str[i]; // str[1] + str[2] + str[3], 3 < 3 -> end
 } return newstr;
 
}; // не работает, не видит строку