const isEven = require("./bai_1.js");

test("isEven should return properly value", () => {
  expect(isEven(2)).toEqual(true);
});

test("isEven should return false value", () => {
  expect(isEven(3)).toEqual(false);
});