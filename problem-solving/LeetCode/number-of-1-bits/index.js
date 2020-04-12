/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    while (n) {
        n = n & (n - 1);
        count++;
    }
    
    return count;
};