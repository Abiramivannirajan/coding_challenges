// Max Product of Two Elements
// Problem:
// Given an integer array nums, find the maximum product of any two elements in the array.
// Example 1:
// Input: 
// nums = [1, 5, 2, 9]
// Output: 
// 45 (Because 5 * 9 = 45)
// Example 2:
// Input:
// nums = [-10, -3, 5, 6, -2]
// Output:
// 30
function maxProduct(nums) {
    // Sort the array in ascending order
    nums.sort(function (a, b) { return a - b; });
    // Calculate and return the maximum product
    return Math.max(nums[nums.length - 1] * nums[nums.length - 2], // Product of two largest numbers
    nums[0] * nums[1] // Product of two smallest numbers
    );
}
// Example Usage:
console.log(maxProduct([1, 5, 2, 9])); // Output: 45
console.log(maxProduct([-10, -3, 5, 6, -2])); // Output: 30
