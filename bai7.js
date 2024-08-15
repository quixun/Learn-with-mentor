function mapArray(arr, callBackFunction) {
  return callBackFunction(arr);
}

console.log(
  mapArray(
    [1, 2, 3, 4, 5],
    (arr) => {
      return newArray = arr.reduce((accumulator, currentValue) => {
        accumulator = currentValue * 2;
      },[])
    },
  )
);
