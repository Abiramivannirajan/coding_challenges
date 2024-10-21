// Write a program in C to find the sum of the left diagonals of a matrix.
//Test Data :
//Input the size of the square matrix : 2
//Input elements in the first matrix :
//element - [0],[0] : 1
//element - [0],[1] : 2
//element - [1],[0] : 3
//element - [1],[1] : 4
// Define the size of the square matrix
var size = 2;
var matrix = [
    [1, 2],
    [3, 4]
];
var sum = 0;
for (var i = 0; i < size; i++) {
    sum += matrix[i][i]; // Accessing diagonal elements [0][0], [1][1], etc.
}
// Output the resulto
console.log("Input Matrix:");
console.table(matrix);
console.log("Sum of the left diagonal elements:", sum);
