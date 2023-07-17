/*
1071. Greatest Common Divisor of Strings

For two strings s and t, we say "t divides s" if and 
    only if s = t + ... + t (i.e., t is concatenated with 
    itself one or more times).

Given two strings str1 and str2, return the largest string 
    x such that x divides both str1 and str2.

Example 1:
    nput: str1 = "ABCABC", str2 = "ABC"
    Output: "ABC"

Example 2:
    Input: str1 = "ABABAB", str2 = "ABAB"
    Output: "AB"

Example 3:
    Input: str1 = "LEET", str2 = "CODE"
    Output: ""

Solution 1

*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    //Clue
    // is concatenated with itself one or more times
    // absolute copy of it self
    // has complete factor of it

    //Solution 1
    //1. get min length
    //2. traverse through the string till 0 - reverse
    //3. if divisible to both string

    let length = Math.min(str1.length, str2.length);
    for (let i = length; i >= 0; i--) {
        let chunk = str1.slice(0, i);
        if (
            str1.length % chunk.length === 0 &&
            str2.length % chunk.length === 0
        ) {
            let tempValue1 = chunk.repeat(
                Math.floor(str1.length / chunk.length)
            );
            let tempValue2 = chunk.repeat(
                Math.floor(str2.length / chunk.length)
            );
            if ((tempValue1 == str1) & (tempValue2 == str2)) {
                return str1.slice(0, i);
            }
        }
    }
    return '';
};
