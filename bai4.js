function reverseString(string) {
  var oldString = string.split("");
  var newString = [];
  for (let i = oldString.length; i >= 0; i--) {
    newString.push(oldString[i]);
  }
  return newString.join("");
}

console.log(reverseString("xuan"));
