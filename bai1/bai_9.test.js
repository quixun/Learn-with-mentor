const daysBetweenDates = require('./bai_9.js')

test('count the day between two dates',() => {
    expect(daysBetweenDates("2023-05-03","2024-08-15")).toEqual(470)
})

