module.exports = countOccurrences = (list, target) => {
  var count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      count++;
    }
  }
  return `${target} appears ${count} times`;
};
