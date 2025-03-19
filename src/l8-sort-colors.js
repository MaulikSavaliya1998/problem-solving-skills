// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// var sortColors = function(nums) {
//     for(let i=0; i<nums.length-1; i++){
//         let swapped = false;
//         for(let j=0; j<nums.length-1; j++){
//             if(nums[j] > nums[j+1])
//             {
//                 let temp = nums[j];
//                 nums[j] = nums[j+1]
//                 nums[j+1] = temp
//                 swapped = true;
//             }
//         }
//         if(!swapped)
//             break;
//     }
// };
var sortColors = function (nums) {
  const obj = { 0: 0, 1: 0, 2: 0 };
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] = obj[nums[i]] + 1;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let idx = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < obj[i]; j++) {
      nums[idx] = i;
      idx++;
    }
  }
};

export const main = () => {
  console.log(sortColors([2, 0, 2, 1, 1, 0]));
  console.log(sortColors([2, 0, 1]));
};
