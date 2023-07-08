/*
136. Single Number

Given a non-empty array of integers nums, every element 
    appears twice except for one. Find that single one.

You must implement a solution with a linear runtime 
    complexity and use only constant extra space.

Example 1:
    Input: nums = [2,2,1]
    Output: 1

Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

Example 3:
    Input: nums = [1]
    Output: 1


Solution 1
    1. sort array
    2. Traverse through the whole array with for loop
    3. if current element is similar with next number, i++
    4. else return element
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    //Solution 1
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            i++;
        } else {
            return nums[i];
        }
    }
};
