function sumArray(arr) {
  var sum = 0;
  var arrLength = arr.length;
  for (var i = 0; i < arrLength; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
