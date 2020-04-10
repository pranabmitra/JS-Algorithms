/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();

    return !!s.length && !isNaN(s);
};
