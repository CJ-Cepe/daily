/*
575. Distribute Candies

Alice has n candies, where the ith candy is of type 
    candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). 
    Alice likes her candies very much, and she wants to eat the maximum number of 
    different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different 
    types of candies she can eat if she only eats n / 2 of them.

Solution 1
    1. change array to set
    2. compute for the allowed candies using the array.length / 2
    3. compare if allowed candies >= set size.
    6. if yes, return allowedCandies
    7. else return set size

*/

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    /*
    Facts
        - Alice has n candies
        - ith candy is of type candyType[i]
        - n is always even
        - only eat n / 2 of the candies she has
        - has duplicates
        - sorted?
        - candyType is array
    
    Intuition
        - use set 
        - 
    */

    //Solution 1 - using sets
    let uniqueCandyType = Array.from(new Set(candyType));
    let allowedCandies = candyType.length / 2;

    return allowedCandies >= uniqueCandyType.length
        ? uniqueCandyType.length
        : allowedCandies;
};
