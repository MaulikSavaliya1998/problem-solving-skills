// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  let triangle = [[1]]
  if(numRows > 1)
    triangle[1] = [1,1]
  for(let i=2; i<numRows; i++){
    let cols = []
    cols[0] = cols[i] = 1
    for(let j=1; j<=(i+i%1)/2; j++){
      cols[j] = cols[i-j] = triangle[i-1][j-1] + triangle[i-1][j]
    }
    triangle[i] = cols;
  }


  return triangle;

  // ---------------------------------------------
  // *** Brute force ***

	// let triangle = [[1]]
	// if(numRows > 1)
	// 	triangle.push([1,1])
  //   for(let i=2;i<numRows;i++){
  //   	let cols = [1]
  //   	for(let j=1; j<i; j++){
  //   		const sum = triangle[i-1][j-1] + triangle[i-1][j]
  //   		cols.push(sum)
  //   	}
  //   	cols.push(1)
  //   	triangle.push(cols)
  //   }
  //   return triangle

  // *** Brute force ***
};

export const main = () => {
  console.log(generate(1));
  console.log(generate(5));
};