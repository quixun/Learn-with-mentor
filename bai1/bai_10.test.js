const factorial = require("./bai_10.js");

test("factorial of 0 should return 1", () => {
  expect(factorial(0)).toEqual(1);
});

test("factorial of 1 should return 1", () => {
  expect(factorial(1)).toEqual(1);
});

test("factorial of 3 should return 6", () => {
  expect(factorial(3)).toEqual(6);
});
