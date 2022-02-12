function miniMaxSum(arr) {
  let minimumSum = 0;
  let maxSum = 0;
  arr.sort();

  for (let index = 0; index < arr.length - 1; index += 1) {
    minimumSum += arr[index];
  }

  arr.sort((a, b) => b - a);

  for (let index = 0; index < arr.length - 1; index += 1) {
    maxSum += arr[index];
  }

  console.log(minimumSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);