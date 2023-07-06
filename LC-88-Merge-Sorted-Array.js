/*
88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted 
    in non-decreasing order, and two integers m and n, representing 
    the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
    but instead be stored inside the array nums1. To accommodate 
    this, nums1 has a length of m + n, where the first m elements 
    denote the elements that should be merged, and the last n elements 
    are set to 0 and should be ignored. nums2 has a length of n.


Example 1:
    Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]
    Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
    The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:
    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]
    Explanation: The arrays we are merging are [1] and [].
    The result of the merge is [1].

Example 3:
    Input: nums1 = [0], m = 0, nums2 = [1], n = 1
    Output: [1]
    Explanation: The arrays we are merging are [] and [1].
    The result of the merge is [1].
    Note that because m = 0, there are no elements in nums1. 
        The 0 is only there to ensure the merge result can fit in nums1.


Solution 1
    1. remove 0, slice array from 0-m
    2. add nums1 and nums2
    3. sort nums1

Solution2
    1. append nums2 to nums1
    2. sort
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    //Solution 1
    nums1.splice(m);
    nums1.push(...nums2);
    nums1.sort(function (a, b) {
        return a - b;
    });

    //Solution2
    for (let i = m, j = 0; i < nums1.length; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort((a, b) => a - b);

    //Solution 5
    //1. traverse backwards
    //2. set index for last element of num1 and num2
    //3. compare each element
    //4. if which one is larger takes the place

    let i = m - 1,
        j = n - 1,
        k = m + n - 1;

    while (j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};
