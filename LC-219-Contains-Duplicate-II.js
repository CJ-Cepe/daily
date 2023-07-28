/*
219. Contains Duplicate II

Given an integer array nums and an integer k, 
    return true if there are two distinct indices 
    i and j in the array such that nums[i] == nums[j] 
    and abs(i - j) <= k.

Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

Solution 1 - try every element
    1. traverse through the whole array nested loop

Solution 2 - window
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    //solution 1 - try per element
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j && nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
        }
    }
    return false;

    //Solution 2
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= k; j++) {
            //logic
            if (nums[i] == nums[i + j] && Math.abs(i - (i + j)) <= k) {
                return true;
            }
        }
    }
    return false;
};
