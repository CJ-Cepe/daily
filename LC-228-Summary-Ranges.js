/*
228. Summary Ranges

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. 
    That is, each element of nums is covered by exactly one of the ranges, and there is no integer 
    x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b

Solution 1 - uses the idea of n - n-1 = 1
    1. compare current element from previous through subtraction
    2. if difference = 1, still in range
    3. else not in range
*/
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    //sorted
    //no duplicates
    //inclusive
    //includes 0
    //returns array
    //elements are string

    //Solution 1 -> n+1 - n = 1
    if (!nums.length) return [];

    let container = [],
        start = nums[0],
        counter = 1;

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i - 1] == 1) {
            counter++;
        } else {
            if (counter == 1) {
                container.push(`${start}`);
            } else {
                container.push(`${start}->${nums[i - 1]}`);
            }
            start = nums[i];
            counter = 1;
        }
    }
    return container;
};
