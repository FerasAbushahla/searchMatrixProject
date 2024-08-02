function searchMatrix(matrix: number[][], target: number): boolean {
  // Iterate over each row
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];

    // Check if the target is within the range of the current row
    if (row[row.length - 1] >= target) {
      // Iterate over each element in the row
      for (let j = 0; j < row.length; j++) {
        if (row[j] === target) {
          console.log(`Target found at row ${i}, column ${j}`);
          return true;
        }
      }
    }
  }
  return false;
}

// Test the function with a sample matrix and target
const matrix: number[][] = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];

const answer = searchMatrix(matrix, 16);
console.log(answer); // Output: false
