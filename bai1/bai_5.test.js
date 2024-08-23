const gradeCalculator = require("./bai_5.js");

test("gradeCalculator should return A for student has point 80", () => {
  expect(gradeCalculator(80)).toEqual("A");
});

test("gradeCalculator should return B for student has point 70", () => {
  expect(gradeCalculator(70)).toEqual("B");
});

test('gradeCalculator should return C for student has point 80',() => {
    expect(gradeCalculator(50)).toEqual("C")
})