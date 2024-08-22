module.exports = sumArray = (arr) => {
  var sum = 0;
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }
  return sum;
};

