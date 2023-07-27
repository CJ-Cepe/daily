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

Solution 2
    1. sort then compare to the next

Solution 3 - use object
    1. initializa an empty object
    2. traverse through the whole array.
    3. set current element as object key
    4. if it doen't exist create one = 1
    5. if it exist append/increment
    6. if >= 2 return true
    7. outside for loop return false


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
    let a = {};
    for (let i = 0; i < nums.length; i++) {
        a[nums[i]] = a[nums[i]] + 1 || 1;
        if (a[nums[i]] >= 2) return true;
    }

    return false;

    //Solution 4 - using sets
};
