// Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

// My solution
function solution(str) {
    str = str.split(""); // str -> array, 'str' haven't 'reverse' method
    str = str.reverse(); // reversed array
    str = str.join(""); // array -> string
    return str;
  }