/*
69. Sqrt(x)

Given a non-negative integer x, return the square root of x 
    rounded down to the nearest integer. The returned 
    integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example 1:
    Input: x = 4
    Output: 2
    Explanation: The square root of 4 is 2, so we return 2.

Example 2:
    Input: x = 8
    Output: 2
    Explanation: The square root of 8 is 2.82842..., 
        and since we round it down to the nearest integer, 2 is returned.

Solution 1
    1.take the square root of a number by raising to its equivalent exponent
    
Solution 2 - binary search 
    1. square range of numbers, use binary to reduce search space 
    2. set low = 0
    3. set high = (target / 2) + 1  to reduce search space, its root can only exist here
    4. while loop, low <= high
    5. compute for mid = low + (high-low)/2
    6. if (mid^2 <= target && (mid+1)^2 > target) - to handle # being round down
    7.      return mid
    8. else if (mid^2 < target) low = mid + 1
    9. else if (mid^2 > target) high = mid - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    //Solution 1
    return Math.floor(x ** (1 / 2));

    //Solution 2
    if (x === 1 || x === 0) return x;

    let low = 0;
    let high = Math.floor(x / 2) + 1;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        if (mid ** 2 <= x && (mid + 1) ** 2 > x) {
            return mid;
        } else if (mid ** 2 < x) {
            low = mid + 1;
        } else if (mid ** 2 > x) {
            high = mid - 1;
        }
    }
};
