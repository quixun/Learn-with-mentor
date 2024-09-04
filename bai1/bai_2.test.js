const sumArray = require("./bai_2.js");

test("sumArray should calculate the sum of array", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toEqual(15);
});
