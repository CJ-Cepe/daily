/*
350. Intersection of Two Arrays II

Given two integer arrays nums1 and nums2, 
    return an array of their intersection. Each element 
    in the result must appear as many times as it shows 
    in both arrays and you may return the result in any order.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2,2]

Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [4,9]
    Explanation: [9,4] is also accepted.


Solution 1 -- using objects
    1. initialize an empty array and object
    2. traverse through the first array and list each unique item to the object
    3. traverse through the second array and compare the current element to the content of the object
    4. if the current element exist in the object, decrement and push element to the result array
    5. return result array
*/
