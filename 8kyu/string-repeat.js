// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

// My solution
function solution(str){
  let newstr = "";
  for (let i = (str.length - 1); i >= 0; --i) { 
    newstr += str[i]; // n, 3, 2, 1, 0
  } return newstr;
}
//////////////////////////////////////////////////

function repeatStr (n, s) {
  if (n % 1 == 0 && typeof s == "string") {
    return s.repeat(n);
  }
}