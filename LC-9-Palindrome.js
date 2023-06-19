/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    return x == Array.from(String(x)).reverse().join('');
};
