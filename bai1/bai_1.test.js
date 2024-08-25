const isEven = require("./bai_1.js");

test("isEven should return true with even number", () => {
  expect(isEven(2)).toEqual(true);
});

test("isEven should return false with old number", () => {
  expect(isEven(3)).toEqual(false);
});