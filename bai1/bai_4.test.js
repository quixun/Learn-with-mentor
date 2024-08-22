const reverseString = require('./bai_4.js')

test('revere a string',() => {
    expect(reverseString('hello')).toEqual('olleh')
})