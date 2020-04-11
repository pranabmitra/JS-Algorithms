/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xor = x ^ y;
    
    return getSetBitsCount(xor);
    
    function getSetBitsCount(n) {
        let count = 0;
        
        while (n) {
            n = n & (n - 1);
            count++;
        }
        
        return count;
    }
};