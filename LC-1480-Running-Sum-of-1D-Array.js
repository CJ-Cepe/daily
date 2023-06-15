/*
    https://leetcode.com/problems/running-sum-of-1d-array/

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let tempList = [];
    tempList[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        tempList[i] = nums[i] + tempList[i - 1];
    }
    return tempList;
};
