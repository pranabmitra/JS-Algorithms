/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let midIndex, median, combinedArr;
    
    function merge(left, right) {
        var result = [],
            lLen = left.length,
            rLen = right.length,
            l = 0,
            r = 0;

        while(l < lLen && r < rLen) {
            if (left[l] < right[r]) {
                result.push(left[l++]);
            } else {
                result.push(right[r++]);
            }
        }

        return result.concat(left.slice(l)).concat(right.slice(r));
    }
    
    combinedArr = merge(nums1, nums2);
    
    if (combinedArr.length & 1 === 1) {
        // Odd
        midIndex = Math.floor(combinedArr.length / 2);
        median = combinedArr[midIndex];
    } else {
        midIndex = combinedArr.length / 2;
        median = (combinedArr[midIndex - 1] + combinedArr[midIndex]) / 2;
    }
    
    return median;
};