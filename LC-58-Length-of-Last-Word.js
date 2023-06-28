/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

Example 2:
    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

Solution 1 - loop through end
    1. trimEnd of the string
    2. check string if empty, return 0
    3. loop backwards, find the index of the last " "
    4. return string length - index of " "
    5. outside of loop, return string length, to handle string without spaces

Solution 2 - lastIndexOf
    1. trim string
    2. return string length - 1 - lastIndexOf(" ")

Solution 3 - split and pop
    1. trim string
    2. split string " "
    3. pop last element
    4. return length of last element
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //Solution 1
    s = s.trimEnd();
    if (!s) return 0; //handle empty string
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            return s.length - 1 - i;
        }
    }
    return s.length; //handle string without space

    //Solution 2
    s = s.trim();
    return s.length - 1 - s.lastIndexOf(' ');

    //Solution 3
    return s.trim().split(' ').pop().length;
};
