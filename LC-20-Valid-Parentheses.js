/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Solution
    1. read per character
    2. initialize an empty stack
    3. if (, [, { is encounter, push their counter part symbol in the stack
    4. else if other is encountered, pop the stack and compare to the current character
    5. if the same, continue. if not return false
    6. after traversing, if array is empty return true else false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //Solution 4
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(':
                stack.push(')');
                break;
            case '{':
                stack.push('}');
                break;
            case '[':
                stack.push(']');
                break;
            default:
                if (stack.pop() !== s[i]) {
                    //pop()
                    return false;
                }
        }
    }

    return !stack.length;
};
