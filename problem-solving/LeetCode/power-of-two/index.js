/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    /* Bitwise AND of n and n-1 will be 0 for 'Power of Two' Integer */
    return n > 0 && (n & n-1) === 0;
};