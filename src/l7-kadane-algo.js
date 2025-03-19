// https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let max = Number.MIN_SAFE_INTEGER;
//     for(let i=0; i<nums.length; i++){
//         let sum = 0;
//         for(let j=i; j<nums.length; j++){
//             sum += nums[j];
//             max = Math.max(sum,max)
//         }
//     }
//     return max;
// };
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(sum, max);
    if (sum < 0) sum = 0;
  }
  return max;
};

export const main = () => {
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  // console.log(maxSubArray([5,4,-1,7,8]))
};
