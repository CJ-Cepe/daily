/*
70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. 
    In how many distinct ways can you climb to the top?

 
Example 1:
    Input: n = 2
    Output: 2
    Explanation: There are two ways to climb to the top.
    1. 1 step + 1 step
    2. 2 steps

Example 2:
    Input: n = 3
    Output: 3
    Explanation: There are three ways to climb to the top.
    1. 1 step + 1 step + 1 step
    2. 1 step + 2 steps
    3. 2 steps + 1 step

Solution 1 - fibonacci
    1. the solution per each third_step is first_step + second_step
    2. loop through this until n number is achieved
    3. we set first_step = 1, second_step = 2, while third_step = 0
    4. we start loop in 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //solution 1 - fibonacci, can also be put in array
    let currentValue = 0,
        a = 1,
        b = 2;
    if (n <= 2) return n;
    for (let i = 3; i <= n; i++) {
        currentValue = a + b;
        a = b;
        b = currentValue;
    }
    return currentValue;
};
