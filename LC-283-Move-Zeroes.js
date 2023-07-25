/*
283. Move Zeroes

Given an integer array nums, 
    move all 0's to the end of it while maintaining 
    the relative order of the non-zero elements.

Note that you must do this in-place without 
    making a copy of the array.


Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]

Example 2:
    Input: nums = [0]
    Output: [0]

Solution 1 - splice and push
    1. traverse through the whole array
    2. if current element is 0 splice it and push 0
    3. i-- to handle 0, 0, 1
    4. size-- to handle never ending/infinite loop

Solution 2 - two pointers version 1
    1. the first pointer traverse through the whole array
    2. the second pointer points to the location of current 0
    3. if the first pointer encounter 0 - ignore
    4. else if element = 0, element j = element i
    5. element i = 0, j++
    6. if j != 0 then j++ 
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    //Solution 1 - splice and push
    let size = nums.length - 1;
    for (let i = 0; i < size; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            size--;
        }
    }
    return nums;

    //Solution 2 - two pointers version 1
    if (nums.length <= 1) return nums;

    for (let i = 0, j = 0; i < nums.length; i++) {
        if (nums[i] && !nums[j]) {
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        } else if (nums[j]) {
            j++;
        }
    }
    return nums;
};
