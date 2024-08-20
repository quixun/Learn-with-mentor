/* Write a function that rotates an array by moving the elements to the left by a given number of steps.
  - Example:
    + Input: arr = [1, 2, 3, 4, 5], step = 2
    + Output: [3, 4, 5, 1, 2]
 */

const rotatedArr = (arr, step) => {
  return arr.slice(step).concat(arr.slice(0, step));
};

console.log(rotatedArr([1, 2, 3, 4, 5], 2));


module.exports = rotatedArr