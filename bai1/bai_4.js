function reverseString(string) {
  var reversedString = "";
  for (let i = string.length; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  return reversedString;
}

console.log(reverseString("hello"));
