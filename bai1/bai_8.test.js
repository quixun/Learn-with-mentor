const countOccurrences = require("./bai_8.js");

test("countOccurrences should return how many times element appear", () => {
  expect(
    countOccurrences(["hello", "xuanphan", "quixuan", "hey", "hello"], "hello")
  ).toEqual("hello appears 2 times");
});
