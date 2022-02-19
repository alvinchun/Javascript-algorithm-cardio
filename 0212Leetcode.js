// 53. Maximum Subarray


// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
 var maxSubArray = function(A) {
    var prev = 0;
    var max = -Number.MAX_VALUE;
  
    for (var i = 0; i < A.length; i++) {
      prev = Math.max(prev + A[i], A[i]);
      max = Math.max(max, prev);
    }
    return max;
};




//2. Plus One
var plusOne = function(digits) {
    // return digits.map(i => String(i)).join('')
    let number = parseInt(digits.join(''))
    totalNum = number + 1
    console.log(totalNum);
    return String(totalNum).split('')
};

console.log(plusOne([1,2,3]));
console.log(plusOne([9,9,9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,2]));

console.log('hi')
