const daysBetweenDates = (day1, day2) => {
    const firstDay = new Date(day1)
    const secondDay = new Date(day2)

    const numberOfBetweenDays = (secondDay - firstDay) / (1000 * 3600 * 24) 
    return numberOfBetweenDays
}

console.log(daysBetweenDates("2023-05-03","2024-08-15"));
