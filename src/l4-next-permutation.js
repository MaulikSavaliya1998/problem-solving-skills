// https://leetcode.com/problems/next-permutation/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	const swap = (i1,i2)=>{
		let temp = nums[i1];
		nums[i1] = nums[i2];
		nums[i2] = temp
	}
	const sorting = (ind) => {
		for(let a=ind; a<nums.length; a++){
			for(let b=a+1; b<nums.length; b++)
				if(nums[a] > nums[b])
					swap(a,b)
		}
	}
	let index = -1;
	for(let j=nums.length-1; j>0; j--)
		if(nums[j-1] < nums[j]){
			index = j-1;
			break;
	}
	if(index > -1){
		let min = index+1
		for(let i=min+1; i<nums.length; i++){
			if(nums[i] < nums[min] && nums[index] < nums[i])
				min = i;
		}
		swap(min,index)
		sorting(index+1)
	}else{
		sorting(0)
	}
	return nums
};

export const main = () => {
  // console.log(nextPermutation([1,2,3])); // 1 3 2
  // console.log(nextPermutation([1,3,2])); // 2 1 3
  // console.log(nextPermutation([2,1,3])); // 2 3 1
  // console.log(nextPermutation([2,3,1])); // 3 1 2
  // console.log(nextPermutation([3,1,2])); // 3 2 1
  // console.log(nextPermutation([3,2,1])); // 1 2 3
  // console.log(nextPermutation([1,5,1])); // 5 1 1
  // console.log(nextPermutation([5,4,7,5,3,2])); // [5,5,2,3,4,7]
  console.log(nextPermutation([1,2,3,4,5,6]))
  console.log(nextPermutation([1,2,3,4,6,5]))
  console.log(nextPermutation([1,2,3,5,4,6]))
 	console.log(nextPermutation([1,2,3,5,6,4]))
  console.log(nextPermutation([1,2,4,3,5,6]))
  console.log(nextPermutation([1,2,4,3,6,5]))

};