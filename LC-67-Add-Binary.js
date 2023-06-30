/*
67. Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:
    Input: a = "11", b = "1"
    Output: "100"
    
Example 2:
    Input: a = "1010", b = "1011"
    Output: "10101"

Solution 1 - binary -> decimal -> binary
    1. convert binary to decimal
    2. decimal to binary
    3. return

Solution 2 
    1. pad 0 on the shorter variable
    2. set carry variable to 0
    3. perform binary addition
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    //solution 1v1 - binary -> decimal -> binary
    console.log(parseInt(a, 2) + parseInt(b, 2));
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);

    //solution 1v2 - binary -> decimal -> binary
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

    //solution 2 - add and carry
    if (a.length > b.length) {
        let tempRange = a.length - b.length;
        for (let i = 0; i < tempRange; i++) {
            b = '0' + b;
        }
    } else if (a.length < b.length) {
        let tempRange = b.length - a.length;
        for (let i = 0; i < tempRange; i++) {
            a = '0' + a;
        }
    }

    let carry = 0;
    let ans = '';
    for (let i = a.length - 1; i >= 0; i--) {
        let tempAns = carry + +a[i] + +b[i];
        switch (tempAns) {
            case 3:
                tempAns = 1;
                carry = 1;
                break;
            case 2:
                tempAns = 0;
                carry = 1;
                break;
            case 1:
            case 0:
                carry = 0;
                break;
        }
        ans = tempAns + ans;
    }
    if (carry) {
        ans = carry + ans;
    }
    return ans;
};
