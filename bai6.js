function filterEvenNumbers(arr) {
  return (newArray = arr.filter((number) => number % 2 === 0));
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(filterEvenNumbers(array));
