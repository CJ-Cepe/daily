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

Solution 1 - look-up objects
    1. initialize an empty object, result = 0, and maxCount = 0
    2. traverse through the whole array to count each elements' instances
    3. per iteration, append equivalent key in the object
    4. if current property > maxCount
    5.      maxCount = current Property
    6.      res = current element
    7. return result

Solution 2 - stack
    1. initialize an empty stack
    2. traverse through the whole array
    3. if current elem is same with the values in the stack, push elem
    4. else pop elem
    5. if stack is empty, push new elem
    6. return the 1st elem of the stack
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    //Solution 1 - look-up objects
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

    //Solution 2 - stack
    let maxElem = [];
    for (let i = 0; i < nums.length; i++) {
        if (!maxElem.length) {
            maxElem.push(nums[i]);
        } else if (maxElem[0] == nums[i]) {
            maxElem.push(nums[i]);
        } else {
            maxElem.pop();
        }
    }
    return maxElem[0];
};
