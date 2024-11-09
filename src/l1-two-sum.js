// https://leetcode.com/problems/two-sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // ** Approach 1: Brute Force **

  // for(let i in nums){
  //     const rem = target - nums[i];
  //     const ind = nums.lastIndexOf(rem)
  //     if(i < ind)
  //         return [+i,ind]
  // } //Ravani@1998 savaliyamaulik98@gmail.com

  // ** Approach 2: Hash Map **

  const map1 = new Map();
  for (let i in nums) {
    const rem = target - nums[i];
    const ind = map1.get(nums[i]);
    if (nums[ind] === rem) {
      return [+ind, +i];
    } else {
      map1.set(rem, i);
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([3, 3], 6));
