const factorial = require("./bai_10.js");

test("factorial function should return 1 when it's received parameter which is 0 or 1", () => {
  expect(factorial(0)).toEqual(1);
});
test("factorial function should return 1 when it's received parameter which 0 or 1", () => {
  expect(factorial(1)).toEqual(1);
});
test("factorial function should return 6 when it's received parameter which is 3", () => {
  expect(factorial(3)).toEqual(6);
});
