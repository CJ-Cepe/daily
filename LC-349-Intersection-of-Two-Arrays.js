/*
349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, 
    return an array of their intersection. 
    Each element in the result must be unique 
    and you may return the result in any order.

Example 1:
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]

Example 2:
    Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    Output: [9,4]
    Explanation: [4,9] is also accepted.

Solution 1 - utilizing set
    1. get the arrays unique version through set
    2. nested loop, traverse and compare
    3. if it exist, push it to the container
    4. return container

Solution 2 - using objects
    1. initialize and empty object and array
    2. traverse through the whole first array and list the elements as key
    3. traverse through the whole second array and check if it exist in the object
    4. if it is, push to empty array
    5. return the array as set of unique

Solution 3 - greedy
    1. initialize an empty array
    2. nested loop, traverse through the whole array
    3. compare if element in nums2 in nums1
    4. if same, push to new array
    5. return array as set
*/

//solution 1
let newNums1 = Array.from(new Set(nums1)),
    newNums2 = Array.from(new Set(nums2));
result = [];

for (let i = 0; i < newNums2.length; i++) {
    for (let j = 0; j < newNums1.length; j++) {
        if (newNums2[i] == newNums1[j]) {
            result.push(newNums2[i]);
        }
    }
}

//Solution 2 - object
let a = [],
    b = {};
for (let i = 0; i < nums1.length; i++) {
    b[nums1[i]] = 1;
}
for (let i = 0; i < nums2.length; i++) {
    if (b[nums2[i]] != undefined) {
        a.push(nums2[i]);
    }
}

return Array.from(new Set(a));
