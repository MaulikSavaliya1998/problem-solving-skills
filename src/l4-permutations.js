// https://leetcode.com/problems/permutations/description

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const output = []

	if(nums.length === 1)
		output[0] = nums;
	else if(nums.length === 2){
		output[0] = [...nums];
		output[1] = nums.reverse()
	}else{
		let noOfPermutation = 1;
		for(let a=nums.length; a>0; a--)
			noOfPermutation *= a;

		output[0] = nums;
		for(let i=1; i<noOfPermutation; i++){
			nextPermutation(i);
		}
	}

	function nextPermutation(index){
		let nextArr = [...output[index-1]];
		let breakPoint = -1;
		for(let i=nextArr.length-1; i>0; i--){
			if(nextArr[i-1] < nextArr[i]){
				breakPoint = i-1;
				break;	
			}
		}
		if(breakPoint === -1)
			nextArr.reverse()
		else{
			let findNextMaxIndex = breakPoint+1;
			for(let j=breakPoint+1; j<nextArr.length; j++){
				if(nextArr[findNextMaxIndex] > nextArr[j] && nextArr[breakPoint] < nextArr[j])
					findNextMaxIndex = j;
			}
			[nextArr[findNextMaxIndex], nextArr[breakPoint]] = [nextArr[breakPoint],nextArr[findNextMaxIndex]];
			nextArr = [...nextArr.slice(0,breakPoint+1),...nextArr.slice(breakPoint+1).reverse()]
		}
		output[index] = nextArr;
	}

    return output;
};

export const main = () => {
	console.log(permute([0,-1,1]))
	// console.log(permute([3,2,1]))
	// console.log(permute([0,1]))
	// console.log(permute([1]))
}