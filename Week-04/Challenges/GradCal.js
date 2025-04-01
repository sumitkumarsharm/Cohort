// write a code for calculate grade of student based on score
// 90 > A
// 80 > B
// 70 > C
// 60 > D
// fail

let score = 58;
function GradeCal(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "Fail";
  }
}

let Grade = GradeCal(score);
console.log(Grade);
