/*
500. Keyboard Row

Given an array of strings words, 
    return the words that can be typed using 
    letters of the alphabet on only one row of 
    American keyboard like the image below.

In the American keyboard:
    the first row consists of the characters "qwertyuiop",
    the second row consists of the characters "asdfghjkl", and
    the third row consists of the characters "zxcvbnm".

Example 1:
    Input: words = ["Hello","Alaska","Dad","Peace"]
    Output: ["Alaska","Dad"]

Example 2:
    Input: words = ["omk"]
    Output: []

Example 3:
    Input: words = ["adsdf","sfd"]
    Output: ["adsdf","sfd"]

Solution 1
1. per word, check in what row the first char is in
2. using that row, check if current element, during traversal is in that row
3. if not, reject word, else push it to the result

Solution 2
1. put possible rows in an array as set to easily manage
2. use methods such as every() and has()
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    //solution 1 - brute force
    //per word, check if where is the first element is any of the rows
    //if it is, check the following letters if it is
    //push to result if it is
    //return result

    let row1 = 'qwertyuiop',
        row2 = 'asdfghjkl',
        row3 = 'zxcvbnm',
        checkRow = '',
        result = [];

    words.forEach((word) => {
        let original = word;
        word = word.toLowerCase();

        if (row1.includes(word[0])) {
            checkRow = row1;
        } else if (row2.includes(word[0])) {
            checkRow = row2;
        } else if (row3.includes(word[0])) {
            checkRow = row3;
        }

        let lettersInRow = checkWord(checkRow, word);
        if (lettersInRow) {
            result.push(original);
        }
    });

    return result;
};

function checkWord(row, word) {
    for (let i = 0; i < word.length; i++) {
        if (!row.includes(word[i])) {
            return false;
        }
    }
    return true;
}
