/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.

Example 1:
    Input: nums = [3,2,3]
    Output: 3

Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

Solution 1
    1. initialize an empty object, result = 0, and maxCount = 0
    2. traverse through the whole array to count each elements' instances
    3. per iteration, append equivalent key in the object
    4. if current property > maxCount
    5.      maxCount = current Property
    6.      res = current element
    7. return result
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //Solution 1 - objects
    let numInstances = {},
        res = 0,
        maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        numInstances[nums[i]] = numInstances[nums[i]] + 1 || 1;
        if (numInstances[nums[i]] > maxCount) {
            maxCount = numInstances[nums[i]];
            res = nums[i];
        }
    }
    return res;
};
