/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    
    for (let i = 0; i < len;) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            len = nums.length;
        } else {
            i++;
        }
    }
    
    return nums.length;
};