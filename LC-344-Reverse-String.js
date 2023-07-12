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

Solution 2 - two pointers
    1. initialize a variable to hold temporary variables
    2. traverse through the whole array (for or while loop)
    3. swap values of elements corresponding to the pointers
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    //Solution 1 - array method
    s.reverse();

    //Solution 2.1 = two pointers - for loop
    let temp = '';
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
        temp = s[j];
        s[j] = s[i];
        s[i] = temp;
    }

    //Solution 2.2 = two pointers - while loop
    let temp = '',
        i = 0,
        j = s.length - 1;
    while (i <= j) {
        temp = s[j];
        s[j] = s[i];
        s[i] = temp;
        i++;
        j--;
    }

    //Solution 3 = array destructuring
};
