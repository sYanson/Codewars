// You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution
function positiveSum(arr) {
    let sum = 0;
    for (let i = -1; i < arr.length; ++i) { //i = 0; 0 < 4; 0++ // i = -1; -1 < 4; ++-1
      if (arr[i] > 0) {                    //            arr[0]                  arr[0]
        sum += arr[i];                     //            arr[1] ??               arr[0]
      }
    } return sum;
  }