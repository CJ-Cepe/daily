/*
66. Plus One

You are given a large integer represented as an 
    integer array digits, where each digits[i] is 
    the ith digit of the integer. The digits are 
    ordered from most significant to least significant 
    in left-to-right order. The large integer does not 
    contain any leading 0's.


Increment the large integer by one and return 
    the resulting array of digits.


Example 1:
    Input: digits = [1,2,3]
    Output: [1,2,4]
    Explanation: The array represents the integer 123.
    Incrementing by one gives 123 + 1 = 124.
    Thus, the result should be [1,2,4].

Example 2:
    Input: digits = [4,3,2,1]
    Output: [4,3,2,2]
    Explanation: The array represents the integer 4321.
    Incrementing by one gives 4321 + 1 = 4322.
    Thus, the result should be [4,3,2,2].
    
Example 3:
    Input: digits = [9]
    Output: [1,0]
    Explanation: The array represents the integer 9.
    Incrementing by one gives 9 + 1 = 10.
    Thus, the result should be [1,0].

Solution 1 - hardcode
    1. traverse through the whole array in reverse
    2. With for loop, if current element is < 9
    3.      element + 1 then return array
    4. else, element = 0 then continue loop
    5. if loop finishes, unshift 1
    6. return array

Solution 2 - bigint and string
    1. join array and cast as bigInt 
    2. add +
    3. convert to string
    4. split to turn string to array
    5. cast each element as number
    6. return array

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    //solution 1
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;

    //solution 2
    let num = BigInt(digits.join(''));
    digits = String(++num).split('').map(Number);
    return digits;
};
