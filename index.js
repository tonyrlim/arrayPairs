//This displays O(n^2) [Quadratic Time]. The nested for loop is equal to O(n * n).
//Log all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairs(array) {
  for(let i = 0; i < array.length; i++) {
    for( let j = 0; j < array.length; j++) {
      console.log(array[i] + ',' + array[j]);
    }
  }
}

logAllPairs(boxes);
