const daysBetweenDates = require("./bai_9.js");

test("daysBetweenDates should return how many days between two dates", () => {
  expect(daysBetweenDates("2023-05-03", "2024-08-15")).toEqual(470);
});
