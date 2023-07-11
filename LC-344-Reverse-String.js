/*
344. Reverse String

Write a function that reverses a string. 
    The input string is given as an array of characters s.

You must do this by modifying the input array 
    in-place with O(1) extra memory.

Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

Solution 1 - array reverse method
    1. use array reverse method
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    //Solution 1 - array method
    s.reverse();
};
