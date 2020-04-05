/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    if (s.length === 1) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        
        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (!isPaired(stack.pop(), s[i])) {
                return false;
            }
        }
    }
    
    return !stack.length;
};
    
function isPaired(open, close) {
    let isMatched = false;
    if (open === '(' && close === ')') {
        isMatched = true;
    }
    
    if (open === '{' && close === '}') {
        isMatched = true;
    }
    
    if (open === '[' && close === ']') {
        isMatched = true;
    }
    
    return isMatched;
}
