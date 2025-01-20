// Product of Array Except Self
// Problem:
// Given an array of numbers, return an array where each element is the product of all the numbers in the original array except the number at that index.
// You cannot use division and must solve it in O(n) time complexity.
// Example 1:
// Input: 
// nums = [1, 2, 3, 4]
// Output: 
// [24, 12, 8, 6]

// Example 2:
// Input:
// nums = [5, 1, 4, 2]
// Output:
// [8, 40, 10, 20]
function productExcept(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

console.log(productExcept([1, 2, 3, 4])); 
console.log(productExcept([5, 1, 4, 2])); 
