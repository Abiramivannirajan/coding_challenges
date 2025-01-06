// Write a function rotateArray that rotates the elements of an array by k positions to the right.

// Example 1:
// Input:
// arr = [1, 2, 3, 4, 5]
// k = 2

// Output:
// [4, 5, 1, 2, 3]

// Example 2:
// Input:
// arr = [10, 20, 30, 40, 50]
// k = 3
// Ouput
// [30, 40, 50, 10, 20]


function rotateArray(arr: number[], k: number): number[] {
    k = k % arr.length;  
    return arr.slice(-k).concat(arr.slice(0, arr.length - k));  
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); 

console.log(rotateArray([10, 20, 30, 40, 50], 3)); 


