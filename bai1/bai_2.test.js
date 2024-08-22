const sumArray = require('./bai_2.js')

test('calculate sum of elements of an array',() => {
    expect(sumArray([1,2,3,4,5])).toEqual(15)
})