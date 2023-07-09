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

Solution 2
    1. traverse through the whole array
    2. per element, check if there is a similarity
    3. if there is only 1, itself, return element

Solution 3
    1. initialized a variable called uniqueElement set to 0
    2. traverse through the whole array
    3  per element perform XOR with uniqueElement and set its content
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

    //Solution 2
    for (let i = 0; i < nums.length; i++) {
        let z = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                z++;
            }
        }
        if (z == 1) {
            return nums[i];
        }
    }

    //Solution 3
    let uniqueElement = 0;
    for (let i = 0; i < nums.length; i++) {
        uniqueElement = uniqueElement ^ nums[i];
    }
    return uniqueElement;
};
