/*
414. Third Maximum Number

Given an integer array nums, return the third 
    distinct maximum number in this array. If the 
    third maximum does not exist, return the maximum number.

Example 1:
    Input: nums = [3,2,1]
    Output: 1
    Explanation:
    The first distinct maximum is 3.
    The second distinct maximum is 2.
    The third distinct maximum is 1.

Example 2:
    Input: nums = [1,2]
    Output: 2
    Explanation:
    The first distinct maximum is 2.
    The second distinct maximum is 1.
    The third distinct maximum does not exist, so the maximum (2) is returned instead.

Example 3:
    Input: nums = [2,2,3,1]
    Output: 1
    Explanation:
    The first distinct maximum is 3.
    The second distinct maximum is 2 (both 2's are counted together since they have the same value).
    The third distinct maximum is 1.

Solution 1
1. convert to set then sort reverse as array
2. return 3rd element if it exist
3. if it does not, return first element
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    //Solution 1
    //sort reverse then set
    //return 3rd num
    //if undefined return 2nd max

    if (nums.length == 0) return [];

    let newNums = Array.from(new Set(nums)).sort((a, b) => b - a);
    if (newNums[2] != undefined) {
        return newNums[2];
    } else {
        return newNums[0];
    }
};
