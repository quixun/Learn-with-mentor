const gradeCalculator = require('./bai_5.js')

test('divide grade by student point',() => {
    expect(gradeCalculator(80)).toEqual("A")
})