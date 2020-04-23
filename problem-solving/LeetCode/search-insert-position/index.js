/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    for (;i < nums.length;) {
        if (nums[i] >= target) {
           break;
        }

        i++;
    }

    return i;
};