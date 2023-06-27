/*
35. Search Insert Position

Given a sorted array of distinct integers and a target value, 
    return the index if the target is found. If not, return the index 
    where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

Solution 1
    1. get index of the target
    2. if not in the index, traverse through the whole array
    3. if current element < target , continue traversing
    4. else if current element > target, return current index
    5. outside of loop, return nums.length 

Solution 2
    1. use binary search
    2. to be continue

Notes
    * negative values are truthy values
    * all are truthy except: 0, NaN, undefined, null, & ''
    * binary search works for sorted array
    *   divides array to middle
    *   easy to understand, tricky to implement
    * sequential search
    *   interates through the whole array one by one
    *   does not need to be sorted

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//solution 1
let val = nums.indexOf(target);
console.log('indexOf = ', val);
if (val >= 0) {
    return val;
} else {
    for (let i = 0; i < nums.length; i++) {
        console.log(i);
        if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;

    //solution 2
    let low = 0,
        high = nums.length - 1,
        mid = low + Math.floor((high - low) / 2);
    while (low <= high) {
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        mid = low + Math.floor((high - low) / 2);
    }
    return nums[mid] > target ? mid : mid + 1;
}
