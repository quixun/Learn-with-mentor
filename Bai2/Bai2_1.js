/* 
    1. Write a function that takes an array and a size, and divides the array into smaller arrays (chunks) of the specified size.
  - Example: 
    + Input: arr = [1, 2, 3, 4, 5, 6, 7, 8], chunkSize = 3
    + Output: [[1, 2, 3], [4, 5, 6], [7, 8]]
    
*/
const dividedArray = (arr, chunkSize) => {
  const arrLength = arr.length;
  const newArr = [];
  for (let i = 0; i < arrLength; i = i + chunkSize) {
    const smallArr = arr.slice(i, chunkSize + i);
    newArr.push(smallArr);
  }
  return newArr;
};

console.log(dividedArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
