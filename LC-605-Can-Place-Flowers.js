/*
605. Can Place Flowers

You have a long flowerbed in which some of the plots are planted, 
    and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty 
    and 1 means not empty, and an integer n, return true if n new flowers can 
    be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
    Input: flowerbed = [1,0,0,0,1], n = 1
    Output: true

Example 2:
    Input: flowerbed = [1,0,0,0,1], n = 2
    Output: false

Solution 1 - use counter
    1. traverse through the whole array
    2. if current element == 0 counter++
    3.      else (1) counter = 0 
    4. if counter === 3
    5.      planted++ & counter = 1
    6. to handle corners or endings
    7.      if starting from 0 then counter = 0
    8.      else if starting with 1 then counter = 2
    9. to handle n = 0
    10.     if length == 1 return boolean equivalent of first element
    11. lastly, return planted >= n

Solution 2 - without mutating the array
    1. initialize a (before) variable to 0
    2. traverse throught he whole array
    3. check if 
    4.      before == 0
    5.      current-element == 0
    6.      after-element == 0 || index == last element
    7.  then before = 1 && n--
    8.  else before = current-element
    9.  return n <= 0 

*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (!n) return true;
    if (flowerbed.length == 1) return !!!flowerbed[0];
    let counter = flowerbed[0] == 1 ? 0 : 2;
    let numPlanted = 0;

    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i] == 1) {
            counter = 0;
        } else {
            counter++;
        }

        if (counter == 2 && i == flowerbed.length - 1) {
            counter++;
        }

        if (counter === 3) {
            counter = 1;
            numPlanted++;
        }
    }
    return numPlanted >= n;

    //solution 2 - without mutating array
    let before = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            before == 0 &&
            flowerbed[i] == 0 &&
            (flowerbed[i + 1] == 0 || i == flowerbed.length - 1)
        ) {
            before = 1;
            n--;
        } else {
            before = flowerbed[i];
        }
    }

    return n <= 0;
};
