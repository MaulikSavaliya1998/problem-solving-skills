// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = n - 1;
  let j = m - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (nums1[j] <= nums2[k] || j < 0) {
      nums1[i] = nums2[k];
      k--;
    } else {
      nums1[i] = nums1[j];
      j--;
    }
  }
  return nums1;
};

export const main = () => {
  console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
  console.log(merge([0], 0, [1], 1));
  console.log(merge([2, 0], 1, [1], 1));
  console.log(merge([2, 0], 1, [1], 1));
};
