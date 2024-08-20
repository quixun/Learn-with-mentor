const sumArray = (arr) => {
  var sum = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArray([1, 2, 3, 4, 5]));
