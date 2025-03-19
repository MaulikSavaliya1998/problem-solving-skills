// https://leetcode.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    debugger
    const output = []
    if(nums.length === 1)
    	output[0] = nums;
    else if(nums.length === 2)
    	if(nums[0] === nums[1])
    		output[0] = nums;
    	else
    		[output[1],output[0]] = [[...nums],nums.reverse()]
    else{
    	const uniqeSize = new Set(nums);
    	const noOfPermutation = 1;
    	for(let i=1;i<=nums.size; i++){
    		noOfPermutation *= i;
    	}
    	for(let j=1; j<=uniqeSize.size; j++)
    		noOfPermutation /= (nums.length - uniqeSize.size);

    	console.log(noOfPermutation,"llll")
    }
    return output;
};

export const main = () => {
	console.log(permuteUnique([1,1,2]));
	// console.log(permuteUnique([1,2,3]))
}