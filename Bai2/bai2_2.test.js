const filterArr = require("./bai2_2");
test("compare arr1 and arr2 return the elements that are present in both arrays", () => {
  expect(filterArr([1, 2, 3, 4], [3, 4, 5, 6])).toStrictEqual([3, 4]);
});
