/*
643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that 
    has the maximum average value and return this value. Any 
    answer with a calculation error less than 10-5 will be accepted.

Example 1:
    Input: nums = [1,12,-5,-6,50,3], k = 4
    Output: 12.75000
    Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:
    Input: nums = [5], k = 1
    Output: 5.00000

Solution 1 - brute force
    1. per index till k, get summation
    2. per iteration, check if it is larger than the current result
    3. if it is, replace else nothing
    4. return results

Solution 2 - brute force -version 2
    1.  per index till k, get summation using while loop
    2.  to get the needed range, add j to i
    3.  per iteration compare current sum to the current highest sum
    4.  if larger, set it as highest sum
    5.  return the highest sum/k

Solution 3 - sliding window
    1. initialize 3 variables for maximumSum, previousSum, and currentSum
    2. get the sum of the first batch of elements from element index 0 - k
    3. set as current maximumSum
    4. traverse and slide through the whole array with i = 1
    5. subtract the value from i-1 and add i+k-1 element index
    6. this is to avoid repeatative addition
    7. per iterration, check if currentSum is > than the maximumSum
    8. if so, assign currentSum as maximumSum
    9. return maximumSum/k
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    //INTUITION
    //in random
    //not sorted

    //brute force
    let result = -Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        let subArray = nums.slice(i, i + k);
        let tempResult = subArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue
        );
        if (tempResult > result) result = tempResult;
    }
    return result / k;

    //Brute Force - version 2
    let result = -Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        let tempResult = (j = 0);
        while (j < k) {
            tempResult += nums[i + j];
            j++;
        }
        if (tempResult > result) result = tempResult;
    }
    return result / k;
};
