function gradingStudents(grades) {
  // Write your code here
  for (let index = 0; index < grades.length; index += 1) {
    if (grades[index] >= 38){  
      if (grades[index] % 5 === 3) {
        grades[index] += 2;
      } else if (grades[index] % 5 === 4) {
        grades[index] += 1;
      }
    }
  }
  return grades;
  // console.log(grades);
}

gradingStudents([73, 67, 38, 33]);

// console.log(38 % 5);
// 1 = 1 = n
// 2 = 2 = n
// 3 = 3 = s
// 4 = 4 = s
// 5 = 0
// 6 = 1
// 7 = 2
// 8 = 3
// 9 = 4