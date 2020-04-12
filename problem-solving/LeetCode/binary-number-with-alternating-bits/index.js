/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const binaryStr = n.toString(2);
    
    for (let i = 0; i < binaryStr.length - 1; i++) {
        if (binaryStr[i] === binaryStr[i + 1]) {
            return false;
        }
    }
    
    return true;
};