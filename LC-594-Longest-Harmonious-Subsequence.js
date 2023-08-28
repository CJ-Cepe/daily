/*
594. Longest Harmonious Subsequence

We define a harmonious array as an array where the difference 
    between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest 
    harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from 
    the array by deleting some or no elements without changing 
    the order of the remaining elements.

Example 1:
    Input: nums = [1,3,2,2,5,2,3,7]
    Output: 5
    Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Example 2:
    Input: nums = [1,2,3,4]
    Output: 2

Example 3:
    Input: nums = [1,1,1,1]
    Output: 0

Solution 1
    - use object to count instances and set unique value as key
    - set current max, and per iteration count their iteration

Solution 2 - two pointers
    1. sort arrays
    2. initialize 2 pointers for left and right
    3. declare LHS to hold the length of longest harmonious sequence
    4. traverse through the whole array with a condition of right < nums.length
    5. get difference between nums[right] - nums[left]
    6. if difference == 1 then set it as LHS if the right - left + 1 is > than current LHS
    7. if difference > 1, left++
    8. else, difference <= 1, right++
    9. return LHS
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    /*
    Facts
    - max - min = 1
    - not sorted
    - value can repeat
    - nums is an array
    - return Length

    Intuition
    - use object
    - can be sort?
    */

    //Solution 1
    //List freq. in object
    let freqCounter = {},
        keys = [...new Set(nums)].sort((a, b) => a - b),
        max = 0;
    for (let i = 0; i < nums.length; i++) {
        freqCounter[nums[i]] = freqCounter[nums[i]] + 1 || 1;
    }
    for (let i = 0; i < keys.length; i++) {
        if (
            freqCounter[keys[i]] != undefined &&
            freqCounter[keys[i] + 1] != undefined
        ) {
            let currentMax = freqCounter[keys[i]] + freqCounter[keys[i + 1]];
            max = currentMax > max ? currentMax : max;
        }
    }

    return max;
};
