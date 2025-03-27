// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let s = nums[0];
  let f = nums[0];
  do {
    s = nums[s];
    f = nums[nums[f]];
  } while (s !== f);

  f = nums[0];
  while (s !== f) {
    s = nums[s];
    f = nums[f];
  }

  return s;
};

export const main = () => {
  console.log(findDuplicate([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]));
  // console.log(findDuplicate([3, 1, 3, 4, 2]));
  // console.log(findDuplicate([3, 3, 3, 3, 3]));
};
