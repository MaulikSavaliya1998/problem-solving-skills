// https://leetcode.com/problems/rotate-image/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// var rotate = function(matrix) {
//     const arr = []

//     for(let i=0; i<matrix.length; i++){
//         const ar = []
//         for(let j=0; j<matrix[0].length; j++){
//           ar[j] = matrix[matrix.length-j-1][i];
//           arr[i] = ar;
//         }
//     }

//     for(let i=0; i<matrix.length; i++){
//         for(let j=0; j<matrix[0].length; j++){
//             matrix[i][j] = arr[i][j]
//         }
//     }
// };

var rotate = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = temp;
    }
  }
};

export const main = () => {
  console.log(
    rotate([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  );
  console.log(
    rotate([
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ])
  );
};
