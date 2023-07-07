/*
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters 
    into lowercase letters and removing all non-alphanumeric characters, 
    it reads the same forward and backward. Alphanumeric characters include 
    letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.

Example 3:
    Input: s = " "
    Output: true
    Explanation: s is an empty string "" after removing non-alphanumeric characters.
    Since an empty string reads the same forward and backward, it is a palindrome.

Solution 1 - js methods
    1. remove special characters using regex, including space
    2. transform to lower case
    3. create new variable, with s transform into array then reverse then back to string
    4. compare and return results


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //Solution 1
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    reverse = Array.from(s).reverse().join('');
    return s === reverse;

    //Solution 2 use two pointers
};
