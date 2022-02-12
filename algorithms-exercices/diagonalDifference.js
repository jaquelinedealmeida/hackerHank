function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let row = 0; row < arr.length; row += 1) {
      leftDiagonal += arr[row][row];
      rightDiagonal += arr[row][arr.length - row - 1];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
}

diagonalDifference([
  [1, 2, 3],  
  [4, 5, 6],
  [9, 8, 9]]);
