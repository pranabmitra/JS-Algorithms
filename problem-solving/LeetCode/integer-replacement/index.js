/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let count = 0;
    
    while (n !== 1) {
        if ((n & 1) === 0) {
            // >> is arithmetic shift right, >>> is logical shift right.
            n = n >>> 1;
        } else if (n === 3 || (n & 3) !== 3) {
            n--;
        } else {
            n++;   
        }
        
        count++;
    }
    
    return count;
};