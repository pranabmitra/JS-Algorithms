/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let result = [0];
    
    for (let i = 1; i <= num; i++) {
        result.push(getSetBitsCount(i));    
    }
    
    function getSetBitsCount(n) {
        let count = 0;
        while (n) {
            n = n & (n - 1);
            count++;
        }
        
        return count;
    }
    
    return result;
};