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


function maxProduct(nums: number[]): number {
    
    nums.sort((a, b) => a - b);
    
    
    return Math.max(
        nums[nums.length - 1] * nums[nums.length - 2], 
        nums[0] * nums[1] 
    );
}


console.log(maxProduct([1, 5, 2, 9])); 
console.log(maxProduct([-10, -3, 5, 6, -2])); 
