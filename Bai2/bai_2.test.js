const rotatedArr = require('./bai2_3.js');

test("compare arr1 and arr2 return the elements that are present in both arrays", () => {
  expect(rotatedArr([1, 2, 3, 4, 5], 2)).toStrictEqual([3, 4, 5, 1, 2]);
});
