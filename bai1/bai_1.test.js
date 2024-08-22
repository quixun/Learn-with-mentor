const isEven = require("./bai_1.js");

test("Check a number which is a even or old", () => {
  expect(isEven(2)).toEqual(true);
});
