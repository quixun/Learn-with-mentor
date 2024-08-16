const mapArray = (arr, callbackFunction) => {
  return arr.map((item) => callbackFunction(item));
};

const array = [1, 2, 3];

console.log(mapArray(array, (item) => item * 2));
