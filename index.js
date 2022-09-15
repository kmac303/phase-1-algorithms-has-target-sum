// Write a function called hasTargetSum that receives two arguments:
// an array of integers
// a target integer
// The function should return true if any pair of numbers in the array adds up to the target number.

function hasTargetSum(array, target) {
   // look through each number
  for (let i = 0; i < array.length; i++) {
    // look through the rest of the numbers
    for (let j = i + 1; j < array.length; j++) {
      // check if i + j = 10
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
