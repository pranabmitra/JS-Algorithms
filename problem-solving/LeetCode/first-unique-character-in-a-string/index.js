/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let tempStr;
    
    for (let i = 0; i < s.length; i++) {
        tempStr = s.slice(0, i) + s.slice(i + 1);
        
        if (!tempStr.includes(s[i])) {
            return i;
        }
    }
    
    return -1;
};