/*
13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 
    12 is written as XII, which is simply X + II. The number 27 is written as XXVII, 
    which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, 
    the numeral for four is not IIII. Instead, the number four is written as IV. 
    Because the one is before the five we subtract it making four. The same principle 
    applies to the number nine, which is written as IX. There are six instances where 
    subtraction is used:

    - I can be placed before V (5) and X (10) to make 4 and 9. 
    - X can be placed before L (50) and C (100) to make 40 and 90. 
    - C can be placed before D (500) and M (1000) to make 400 and 900.

    Given a roman numeral, convert it to an integer.

Example 1:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

//Solution 1
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let accumulator = 0;
    for (let i = 0; i < s.length; i++) {
        symbols[s[i]] < symbols[s[i + 1]]
            ? (accumulator -= symbols[s[i]])
            : (accumulator += symbols[s[i]]);
    }
    return accumulator;
};

//Solution 2
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    s = Array.from(s);
    let tempArr = [];
    let accumulator = 0;
    s.forEach((value) => {
        console.log(value);
        switch (value) {
            case 'I':
                tempArr.push(1);
                break;
            case 'V':
                tempArr.push(5);
                break;
            case 'X':
                tempArr.push(10);
                break;
            case 'L':
                tempArr.push(50);
                break;
            case 'C':
                tempArr.push(100);
                break;
            case 'D':
                tempArr.push(500);
                break;
            case 'M':
                tempArr.push(1000);
                break;
        }
    });

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] < tempArr[i + 1]) {
            accumulator += tempArr[i + 1] - tempArr[i];
            i++;
        } else {
            accumulator += tempArr[i];
        }
    }

    return accumulator;
};
