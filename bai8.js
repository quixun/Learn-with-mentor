const countOccurrences = (list, target) => {
  const item = list.split("");
  var count = 0;
  for (let i = 0; i < item.length; i++) {
    if (item[i] === target) {
      count++;
    }
  }
  return `${target} appears ${count} times`;
};

console.log(countOccurrences("abkcejhdak", "j"));
