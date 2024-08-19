const factorial1 = (x) => {
  if (x === 0 || x === 1) return 1;
  return x * factorial1(x - 1);
};
console.log(factorial1(0));
