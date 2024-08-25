const filterArr = require("./bai2_2");

test("filterArr should return a new array if two arrays have common elements", () => {
  expect(filterArr([1, 2, 3, 4], [3, 4, 5, 6])).toStrictEqual([3, 4]);
});

test("filterArr should return the empty array if two arrays have no common element", () => {
  expect(filterArr([1, 2, 3, 4], [5, 6])).toStrictEqual([]);
});
