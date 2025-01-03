// You are tasked with implementing a utility function mergeArrays that takes two sorted arrays of numbers and merges them into a single sorted array without duplicates.
// Write a function mergeArrays with the following signature:
// typescript
// Copy code
// function mergeArrays(arr1: number[], arr2: number[]): number[];
// Requirements:
// Both input arrays are sorted in ascending order.
// The output array should also be sorted in ascending order.
// The output array should not contain any duplicates.
// Do not use the Set object to handle duplicates.
// Example Input:
// const array1 = [1];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// Expected Output:
// [1, 2, 3, 5, 6, 7, 8, 9]

function merge(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;
  
    while (i < arr1.length || j < arr2.length) {
      let value: number;
  
      if (i >= arr1.length) {
        value = arr2[j++];

      } else if (j >= arr2.length) {
      
        value = arr1[i++];
      } else if (arr1[i] < arr2[j]) {

        value = arr1[i++];
      } else if (arr1[i] > arr2[j]) {

        value = arr2[j++];
      } else {
        value = arr1[i++];

        j++;  
      }
  
      if (result[result.length - 1] !== value) {
        result.push(value);
      }
    }
  
    return result;
  }
  
 
  const array1 = [1, 3, 5, 7];
  const array2 = [2, 3, 6, 8, 9];
  console.log(merge(array1, array2));  



  