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
*/
