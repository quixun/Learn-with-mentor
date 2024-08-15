const mapArray = (arr, callbackFunction) => {
  return callbackFunction(arr);
};

const array = [1, 2, 3, 4, 5, 6];

console.log(
  mapArray(array, (arr) => {
    return arr.map((item) => item * 2 );
  })
);
