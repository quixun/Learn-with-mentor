const dividedArray = require('./bai2_1.js')

test('divides the array into smaller arrays (chunks) of the specified size', () => {
    expect(dividedArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  });