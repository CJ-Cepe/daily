/*
26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, 
    remove the duplicates in-place such that each unique element appears only once. 
    The relative order of the elements should be kept the same. Then return the
    number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, 
    you need to do the following things:

    -Change the array nums such that the first k elements of nums contain the 
        unique elements in the order they were present in nums initially. 
        The remaining elements of nums are not important as well as the size of nums.
    
    -Return k.

Example 1
    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two 
        elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k 
        (hence they are underscores).

Solution
    1. set a pointer i = 0
    2. traverse through array
    3. if the current element is not equals to element[i]
            move pointer i to next by i++
            element[i] = current-element
    4.  else
            nothing
    5. return ++i

Notes
    1. JS when passing objects and array is pass by reference
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    nums.forEach((value) => {
        if (value !== nums[i]) {
            i++;
            nums[i] = value;
        }
    });
    return ++i;
};
