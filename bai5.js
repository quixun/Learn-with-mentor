function gradeCalculator(point) {
  if (point < 0) {
    return;
  } else if (point <= 25) return "D";
  else if (point > 25 && point <= 50) return "C";
  else if (point > 50 && point <= 75) return "B";
  else if (point > 75 && point <= 100) return "A";
}

console.log(gradeCalculator(Math.floor(Math.random() * 100)));
