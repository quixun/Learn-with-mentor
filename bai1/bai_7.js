module.exports = mapArray = (arr, callbackFunction) => {
  return arr.map((item) => callbackFunction(item));
};
