/*
628. Maximum Product of Three Numbers

Given an integer array nums, find three numbers 
    whose product is maximum and return the maximum product.

Example 1:
    Input: nums = [1,2,3]
    Output: 6
    
Example 2:
    Input: nums = [1,2,3,4]
    Output: 24

Example 3:
    Input: nums = [-1,-2,-3]
    Output: -6

Solution 1
    sort array - the largest in the last 3, while the smallest in the first 3
    multiply the last 3
    multiply the first 3
    multiply the last 2 and the first 1
    multiply the first 2 and the last 1
    get the max of these
*/
