/*  
1768. Merge Strings Alternately 

You are given two strings word1 and word2. Merge the strings 
    by adding letters in alternating order, starting with word1. 
    If a string is longer than the other, append the additional 
    letters onto the end of the merged string.

Return the merged string.

Example 2:
    Input: word1 = "ab", word2 = "pqrs"
    Output: "apbqrs"
    Explanation: Notice that as word2 is longer, "rs" is appended to the end.
    word1:  a   b 
    word2:    p   q   r   s
    merged: a p b q   r   s

Example 3:
    Input: word1 = "abcd", word2 = "pq"
    Output: "apbqcd"
    Explanation: Notice that as word1 is longer, "cd" is appended to the end.
    word1:  a   b   c   d
    word2:    p   q 
    merged: a p b q c   d

Solution 1 - use loop/1 pointer
    1. initialize variables
        i   =   0 --> as index/pointer
        maxLength = length of the longest string
        mergeString = "" --> where the merge string is placed
    2. traverse through the whole arrays until the length of the longest string
    3. concatenate current element, corresponding to the index
    4. if undefined, concatenate an empty string instead
    
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    //Solution 1
    let i = 0,
        mergeString = '',
        maxLength = Math.max(word1.length, word2.length);

    while (i < maxLength) {
        mergeString += word1[i] || '';
        mergeString += word2[i] || '';
        i++;
    }

    return mergeString;

    //Solution 1.2
    let i = 0,
        mergeString = '',
        maxLength = Math.max(word1.length, word2.length);

    while (i < maxLength) {
        mergeString += (word1[i] || '') + (word2[i] || '');
        i++;
    }

    return mergeString;
};
