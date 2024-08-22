const filterEvenNumbers = require("./bai_6.js");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test("find even elements", () => {
  expect(filterEvenNumbers(array)).toEqual([2, 4, 6, 8]);
});
