const countOccurrences = require('./bai_8.js')


test('count the appearance of element',() => {
    expect(countOccurrences(['hello','xuanphan','quixuan','hey','hello'],'hello')).toEqual('hello appears 2 times')
})


