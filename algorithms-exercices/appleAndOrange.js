function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesCount = 0;
  let orangesCount = 0;
  for (let index = 0; index < apples.length; index += 1) {
    if ((apples[index] + a) >= s && (apples[index] + a <= t)) {
      applesCount += 1;
    }
  }

  for (let index = 0; index < oranges.length; index += 1) {
    if ((oranges[index] + b) <= t && (oranges[index] + b) >= s) {
      orangesCount += 1;
    }
  }
  console.log(applesCount);
  console.log(orangesCount);
};

countApplesAndOranges(2, 3, 1, 5, [-2], [-1]);