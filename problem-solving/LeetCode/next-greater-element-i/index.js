/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let isFound = false;
        
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums1[i] < nums2[k]) {
                        result.push(nums2[k]);
                        isFound = true;
                        break;
                    }
                }
            }
        }
        
        if (!isFound) {
            result.push(-1);
        }
    }
    
    return result;
};