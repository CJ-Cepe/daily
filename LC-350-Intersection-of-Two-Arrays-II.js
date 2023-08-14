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

Solution 2 -- js methods
    1. initialize and empty array
    2. traverse through the whole first array
    3. check if current element is in array2
    4. if yes, push the current element to the result
    5. remove the similar element in array2 using splice
    6. return result

Solution 3 - set
    1. get unique and sorted by sorting array then converting to set then to array again
    2. traverse using for loop
    3. check if current index is in the array
    4. if not, push index in the result
    5. return result
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    //solution 1 - pointers
    //solution 2 - objects
    let list = {},
        results = [];

    for (let i = 0; i < nums1.length; i++) {
        list[nums1[i]] = list[nums1[i]] + 1 || 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (list[nums2[i]] != undefined) {
            if (list[nums2[i]] != 0) {
                list[nums2[i]] = list[nums2[i]] - 1;
                results.push(nums2[i]);
            }
        }
    }

    return results;

    //solution 3 - sorted

    //Solution 4 - includes
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            result.push(nums1[i]);
            nums2.splice(nums2.indexOf(nums1[i]), 1);
        }
    }

    return result;
};
