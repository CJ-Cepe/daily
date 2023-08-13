/*
448. Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in 
    the range [1, n], return an array of all the integers 
    in the range [1, n] that do not appear in nums.

Example 1:
    Input: nums = [4,3,2,7,8,2,3,1]
    Output: [5,6]

Example 2:
    Input: nums = [1,1]
    Output: [2]

Solution 1
 1. initialize an empty array
 2. traverse through the whole array using for loop
 3. where i = 1; i <= array.length; i++
 4. check if current element is included in the array
 5. if no, push to result array, else continue
 6. return array

 SOlution 2
 1. intialize and empty object and array
 2. traverse through the whole array, per element set as key and assign 1
 3. for loop, till <= nums.length, check if current index is present as key in the object
 4. if not, push to the array
 5. return array as result
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    //facts
    //[1, 1 < n]    - inclusive

    //solution 1
    //initialize an empty array
    //traverse through the whole array using for loop, till the length of nums
    //check if current index in the array
    //if not, push to result
    //else continue

    let result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) result.push(i);
    }
    return result;

    //alternative to includes is binary search
    //set can also be use to remove duplicates
    //math ?
    //Get the sum of numbers from (1, n) - by the total of the array
    //use object, get the unique

    //Solution 2 - using objects
    let a = {},
        result = [];
    nums.forEach((value) => {
        a[value] = 1;
    });

    for (let i = 1; i <= nums.length; i++) {
        if (a[i] == undefined) {
            result.push(i);
        }
    }

    return result;
};
