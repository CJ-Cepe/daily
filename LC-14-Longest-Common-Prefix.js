/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
    If there is no common prefix, return an empty string "".

Example 1
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

Solution
    - sort string
    - compare only the first and the last, with the first being the main basis
    - compare per char, if a char is not equal, return slice of first string till index
    - return first string as main fall/catcher
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].substring(0, i);
        }
    }
    return strs[0];
};
