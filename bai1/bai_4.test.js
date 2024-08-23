const reverseString = require("./bai_4.js");

test("reverseString should return olleh when input is hello", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
