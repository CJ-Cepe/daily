/*
28. Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of 
    the first occurrence of needle in haystack, or -1 if needle 
    is not part of haystack.

Example 1:
    Input: haystack = "sadbutsad", needle = "sad"
    Output: 0
    Explanation: "sad" occurs at index 0 and 6.
    The first occurrence is at index 0, so we return 0.

Solution 1
    1. use JS built in method - indexOf()

Solution 2
    1. traverse through the whole haystack
    2. check if current element is equals to the first char of needle
    3. if yes, compare the value of needle on the slice of haystack from (index, index + needle.length)
    4.      if same, return current index
    5.      if not same, continue with iteration
    6. default, return -1

Solution 3
    1. Use include method, to check if needle is in haystack
    2. if not, return -1
    3. if yes, traverse through the whole string
    4. if current element is equals to the first char of needle
    5.     then loop throught the haystack and needle, to compare each char
    6.     if a char is met that is not equal, break
    7.     if the inner loop is equals to the length of needle, return outer loop index 
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    //Solution 1
    return haystack.indexOf(needle);

    //Solution 2
    if (!needle.length) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            if (haystack.slice(i, i + needle.length) == needle) {
                return i;
            }
        }
    }
    return -1;

    //Solution 3
    if (haystack.includes(needle)) {
        for (let j = 0; j < haystack.length; j++) {
            if (haystack[j] == needle[0]) {
                for (let i = 0; i < needle.length; i++) {
                    if (haystack[j + i] !== needle[i]) {
                        break;
                    }
                    if (i === needle.length - 1) {
                        return j;
                    }
                }
            }
        }
    } else {
        return -1;
    }
}; //function
