/*
628. Maximum Product of Three Numbers

Given an integer array nums, find three numbers 
    whose product is maximum and return the maximum product.

Example 1:
    Input: nums = [1,2,3]
    Output: 6
    
Example 2:
    Input: nums = [1,2,3,4]
    Output: 24

Example 3:
    Input: nums = [-1,-2,-3]
    Output: -6

Solution 1
    sort array - the largest in the last 3, while the smallest in the first 3
    multiply the last 3
    multiply the first 3
    multiply the last 2 and the first 1
    multiply the first 2 and the last 1
    get the max of these

Solution 2
    sort array
    multiply the last 3
    multiply the first 2 and the last element
    return the max value between the 2 product
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let length = nums.length,
        a = (b = c = d = 0);
    nums.sort((a, b) => a - b);

    a = nums[length - 1] * nums[length - 2] * nums[length - 3];
    b = nums[0] * nums[1] * nums[2];
    c = nums[0] * nums[1] * nums[length - 1];
    d = nums[0] * nums[length - 1] * nums[length - 2];

    return Math.max(a, b, c, d);

    //Solution 2 - use only the product of the 3 largest, or the product of the 2 smallest and 1 largest
};
