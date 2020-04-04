/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let flag = true,
        str = x.toString().trim(),
        len = str.length;
    
    for (let i = 0, j = len - 1; i < (len / 2); i++, j--) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        }
    }
    
    return flag;
};