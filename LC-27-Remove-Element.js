/*
27. Remove Element

Given an integer array nums and an integer val, 
    remove all occurrences of val in nums in-place. 
    The order of the elements may be changed. 
    Then return the number of elements in nums 
    which are not equal to val.

Consider the number of elements in nums which are 
    not equal to val be k, to get accepted, you need 
    to do the following things:

    * Change the array nums such that the first k elements 
        of nums contain the elements which are not equal to val. 
        The remaining elements of nums are not important as well 
        as the size of nums.
    
    * Return k.
    
Example
    Input: nums = [0,1,2,2,3,0,4,2], val = 2
    Output: 5, nums = [0,1,4,0,3,_,_,_]
    Explanation: Your function should return k = 5, 
        with the first five elements of nums containing 0, 0, 1, 3, and 4.
    Note that the five elements can be returned in any order.
    It does not matter what you leave beyond the returned k (hence they are underscores).
    
Solution 1
    1. traverse through the whole array
    2. if current element is equals to the target
    3.      remove element - using splice()
    4.      i--
    5. return current array lenght

Solution 2
    1. set another pointer to 0
    2. traverse through the whole array - for loop, j iterator
    3. if current element is NOT equals to the target
    4.      array[i] = array[j]
    5.      i++
    6. return i
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    //solution 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;

    //solution 2
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i++] = nums[j];
        }
    }
    return i;
};
