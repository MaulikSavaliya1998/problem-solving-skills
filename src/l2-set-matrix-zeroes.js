// https://leetcode.com/problems/set-matrix-zeroes

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

  // ** Approach 4: Optimal **

  let flag = false;
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[0].length; j++){
      if(matrix[i][j]===0){
        if(j===0)
          flag = true;
        else{
          matrix[0][j] = 0;
        }
        matrix[i][0] = 0;
      }
    }
  }

  for(let i=1; i<matrix.length; i++){
    for(let j=1; j<matrix[0].length; j++){
      if(matrix[i][j]!==0)
        if(matrix[0][j]===0 || matrix[i][0]===0)
          matrix[i][j] = 0
    }
  }

  if(matrix[0][0]===0)
    for(let j=1; j<matrix[0].length; j++){
        matrix[0][j] = 0;
    }

  if(flag)
    for(let i=0;i<matrix.length; i++)
      matrix[i][0]=0

  // ** Approach 4: Optimal **

  // ---------------------------------------------------------------------------

  // ** Approach 3: Better **

  // const rows = new Array(matrix.length).fill(0);
  // const cols = new Array(matrix[0].length).fill(0);

  // for(let i=0; i<rows.length; i++){
  //   for(let j=0; j<cols.length; j++){
  //     if(matrix[i][j]===0){
  //       rows[i] = 1;
  //       cols[j] = 1;
  //     }
  //   }
  // }

  // for(let i=0; i<rows.length; i++){
  //   for(let j=0; j<cols.length; j++){
  //     if(cols[j] || rows[i])
  //       matrix[i][j] = 0
  //   }
  // }

  // ** Approach 3: Better **

  // --------------------------------------------------------------------------

  // // ** Approach 2: Brute Force **
  // for(let i=0; i<matrix.length; i++){
  //   for(let j=0; j<matrix[i].length; j++){
  //     if(matrix[i][j]===0){
  //       for(let k=0; k<matrix.length; k++)
  //         if(matrix[k][j] !==0)
  //           matrix[k][j] = 0.1
  //       for(let l=0; l<matrix[i].length; l++)
  //         if(matrix[i][l] !==0)
  //           matrix[i][l] = 0.1
  //     }
  //   }
  // }

  // for(let i=0; i<matrix.length; i++){
  //   for(let j=0; j<matrix[i].length; j++)
  //     if(matrix[i][j]===0.1)
  //       matrix[i][j]=0
  // }
  // // ** Approach 2: Brute Force **

  // --------------------------------------------------------------------------

  // ** Approach 1: Brute Force **
  // for(let i = 0; i < matrix.length; i++) {
  //   for(let j = 0; j < matrix[i].length; j++){
  //     if(matrix[i][j] === 0)
  //       matrix[i][j] = 0.1;
  //   }
  // }
  // for(let i = 0; i < matrix.length; i++) {
  //     for(let j = 0; j < matrix[i].length; j++){
  //       if(matrix[i][j] === 0.1){
  //         for(let line = 0; line < matrix.length; line++){
  //           if(line === i){
  //             for(let k = 0; k < matrix[i].length; k++){
  //               if(matrix[line][k] != 0.1){
  //                 matrix[line][k] = 0;
  //               }
  //             }
  //           }
  //           if(matrix[line][j] != 0.1)
  //             matrix[line][j] = 0;
  //         }
  //       }     
  //     }
  // }
  // for(let i = 0; i < matrix.length; i++) {
  //     for(let j = 0; j < matrix[i].length; j++){
  //       if(matrix[i][j] === 0.1)
  //         matrix[i][j] = 0;
  //     }
  // }
  // ** Approach 1: Brute Force **

  return matrix
};

export const main = () => {
  console.log(
    setZeroes([
      [0,0,0,5],
      [4,3,1,4],
      [0,1,1,4],
      [1,2,1,3],
      [0,0,1,1]
    ])
  );
  console.log(
    setZeroes([
      [-4,-2147483648,6,-7,0],
      [-8,6,-8,-6,0],
      [2147483647,2,-9,-6,-10]
    ])
  );
  console.log(
    setZeroes([
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ])
  );
  console.log(
    setZeroes([
      [1,2,3,4],
      [5,0,7,8],
      [0,10,11,12],
      [13,14,15,0]
    ])
  );
};
