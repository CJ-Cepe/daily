/*
217. Contains Duplicate

Given an integer array nums, return true 
    if any value appears at least twice in the array, 
    and return false if every element is distinct.

Example 1:
    Input: nums = [1,2,3,1]
    Output: true

Example 2:
    Input: nums = [1,2,3,4]
    Output: false

Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true

Solution 1
    1. sort array
    2. use counter


*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    //Solution 1 - sort -> traverse -> counter
    /*
    nums = nums.sort()

    let index = 1,
        counter = 1,
        val = nums[0]

    while(index<nums.length && counter < 2){
        if(nums[index]==val){
            counter++
        }else {
            val = nums[index]
            counter = 1
        }
        index++
    }

    return counter >= 2
    */

    //solution 2 - compare next to each other
    nums = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }
    }
    return false;

    //solution 3 - using objects
    //Solution 4 - using sets
};
