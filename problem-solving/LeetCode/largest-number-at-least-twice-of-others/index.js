/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const len = nums.length;
    const sorted = [...nums].sort(function(a, b){ return a - b; });
    
    if ((sorted[len - 1] / 2) < sorted[len - 2]) {
        return -1;
    }
    
    for (let i = 0; i < len; i++) {
        if (nums[i] === sorted[len - 1]) {
            return i;
        }
    }
};