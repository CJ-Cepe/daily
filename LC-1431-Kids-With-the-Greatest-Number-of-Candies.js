/*
1431. Kids With the Greatest Number of Candies

There are n kids with candies. You are given an 
    integer array candies, where each candies[i] 
    represents the number of candies the ith kid has, 
    and an integer extraCandies, denoting the number 
    of extra candies that you have.

Return a boolean array result of length n, where result[i] 
    is true if, after giving the ith kid all the extraCandies, 
    they will have the greatest number of candies among all the 
    kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Example 1:
    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true] 
    Explanation: If you give all extraCandies to:
    - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
    - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
    - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
    - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
    - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

Example 3:
    Input: candies = [12,1,12], extraCandies = 10
    Output: [true,false,true]


Solution 1
    1. identify largest number
    2. get required Number by subtracting largest number and extra candies
    3. the required Number is the number the element needs to be at = or greater to be true
    4. traverse through the whole array, and compare each element to the required Number
    5. push true if >= while push false of <

Solution 2
    1. identify largest number throught math max and spreader operator
    2. traverse through the whole array
    3. per element add the extracandies and compare if >= or <
    4. if >= push true
    5. else push false
    6. return arr

*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
    //Solution 1
    let arr = [],
        max = 0,
        requiredNum = 0;

    candies.forEach(function (value) {
        max = value > max ? value : max;
    });

    //if extraCandies is larger than max, then whatever we add it is still the largest
    requiredNum = max >= extraCandies ? max - extraCandies : 0;

    candies.forEach(function (value) {
        value >= requiredNum ? arr.push(true) : arr.push(false);
    });

    return arr;

    //solution 2
    let arr = [];
    let max = Math.max(...candies);

    candies.forEach((value) => {
        value + extraCandies >= max ? arr.push(true) : arr.push(false);
    });

    return arr;
};
