/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let temp = nums1.slice(0);
    
    for (let i = 0, j = 0, k = 0; i < m + n; i++) {
        if (j >= m || m === 0) {
            nums1[i] = nums2[k];
            k++;
        } else if (k >= n || n === 0) {
            nums1[i] = temp[j];
            j++;
        } else if (temp[j] < nums2[k]) {
            nums1[i] = temp[j];
            j++;
        } else {
            nums1[i] = nums2[k];
            k++;
        }
    }
};