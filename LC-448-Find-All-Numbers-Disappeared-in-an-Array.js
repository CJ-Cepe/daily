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
*/
