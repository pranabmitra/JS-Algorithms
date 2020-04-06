/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = Math.sign(x) * parseInt(x.toString().split('').reverse().join(''), 10);
    
    if (result * Math.sign(result) > Math.pow(2, 31)) {
        result = 0
    }
    
    return result;
};