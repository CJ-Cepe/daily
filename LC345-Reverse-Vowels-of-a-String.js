/*
345. Reverse Vowels of a String

Given a string s, reverse only all the vowels 
    in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and 
    they can appear in both lower and upper cases, more than once.

Example 1:
    Input: s = "hello"
    Output: "holle"

Example 2:
    Input: s = "leetcode"
    Output: "leotcede"


Solution 1 - 2 pointers
    1. initialize 2 pointers: i = 0, j = s.length - 1
    2. traverse through the whole array from the start and end
    3. if character[i] is a vowel and character[j] is a vowel, then swap
    4.      i++
    5.      j--
    6. else if character[i] is not vowel
    7.      i++
    8. else if character[j] is not vowel
    9.      j--
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    //Solution 1 - two pointers

    let i = 0,
        j = s.length - 1,
        vowels = 'aeiou'.split(''),
        z = s.split('');

    while (i < j) {
        if (
            vowels.includes(z[i].toLowerCase()) &&
            vowels.includes(z[j].toLowerCase())
        ) {
            [z[i], z[j]] = [z[j], z[i]];
            i++;
            j--;
        } else if (!vowels.includes(z[i].toLowerCase())) {
            i++;
        } else if (!vowels.includes(z[j].toLowerCase())) {
            j--;
        }
    }
    return z.join('');
};
