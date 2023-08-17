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

*/
