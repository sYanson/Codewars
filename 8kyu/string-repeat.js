// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

// My solution
function repeatStr (n, s) {
    if (n % 1 == 0) { //условие на integer
      if (typeof s == string) { //условие на тип string
        for (i = 1; i < n; ++i) { // n = 3
          s += s;
        }
      }
    }
    return s;
  } // не работает(