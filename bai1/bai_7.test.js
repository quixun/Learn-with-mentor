const mapArray = require("./bai_7.js");

const array = [1, 2, 3];

test("conduct a callback function", () => {
  expect(mapArray(array, (item) => item * 2)).toEqual([2, 4, 6]);
});
