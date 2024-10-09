// Write a program in C to find the sum of the left diagonals of a matrix.
//Test Data :
//Input the size of the square matrix : 2
//Input elements in the first matrix :
//element - [0],[0] : 1
//element - [0],[1] : 2
//element - [1],[0] : 3
//element - [1],[1] : 4
// Define the size of the square matrix
const size = 2
const matrix: number[][] = [
    [1, 2],
    [3, 4]
];

let sum = 0
for (let i = 0; i < size; i++) {
    sum += matrix[i][i];  // Accessing diagonal elements [0][0], [1][1], etc.
}

// Output the result
console.log("Input Matrix:");
console.table(matrix);
console.log("Sum of the left diagonal elements:", sum);
