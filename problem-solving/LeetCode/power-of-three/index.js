/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 1) {
        n = n/3;
    }
    
    return n === 1;
};