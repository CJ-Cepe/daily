/*
268. Missing Number

Given an array nums containing n distinct 
    numbers in the range [0, n], return the 
    only number in the range that is missing from the array.

Example 1:
    Input: nums = [3,0,1]
    Output: 2
    Explanation: n = 3 since there are 3 numbers, 
        so all numbers are in the range [0,3]. 2 is the 
        missing number in the range since it does not appear in nums.

Example 2:
    Input: nums = [0,1]
    Output: 2
    Explanation: n = 2 since there are 2 numbers, so all numbers are 
    in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Solution 1
    1. sort array, traverse using for loop utilizing the index
    2. compare if index is equals to the current element
    3. if not, return i
    4. else return last index + 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    //facts
    //the missing number is always in the middle
    //  unless range is < 2
    //starts with 0, ends with n
    //no duplicate

    //edge case
    //[0] = 1
    //[1] = 0
    //[0, 1] = 2
    //[0, 2] = 1

    //solution 1
    //sort
    //traverse and use the index of a for loop to identify the missing number
    nums = nums.sort((a, b) => a - b);

    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    return nums[nums.length - 1] + 1;

    //solution 2
    //for loop, use index
    //use objects

    //Solution 3
    let res = new Array(nums.length + 1).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        res[nums[i]] = nums[i];
    }
    return res.indexOf(-1);
};
