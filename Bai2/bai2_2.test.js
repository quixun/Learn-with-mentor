const filterArr = require("./bai2_2");

test("filterArr should return a new array including the elements that are present in both arrays", () => {
  expect(filterArr([1, 2, 3, 4], [3, 4, 5, 6])).toStrictEqual([3, 4]);
});

test("filterArr should return the null array when there is not any element present in both arrays", () => {
  expect(filterArr([1, 2, 3, 4], [])).toStrictEqual([]);
});
