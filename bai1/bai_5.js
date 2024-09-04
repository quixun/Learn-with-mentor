module.exports = function gradeCalculator(point) {
  if (point < 0 || point > 100) {
    return;
  }
  if (point <= 25) return "D";
  if (point > 25 && point <= 50) return "C";
  if (point > 50 && point <= 75) return "B";
  if (point > 75 && point <= 100) return "A";
}

