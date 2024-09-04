/* 
    2. Write a function that takes two arrays and returns a new array containing the elements that are present in both arrays.
  - Example: 
    + Input: arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]
    + Output: [3, 4]
*/

module.exports = filterArr = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};
