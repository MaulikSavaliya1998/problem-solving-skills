// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// ** Approach 1: Brute force **
// var merge = function (intervals) {
//   let newArray = [];
//   for (let i = 0; i < intervals.length - 1; i++) {
//     for (let j = i + 1; j < intervals.length; j++) {
//       if (
//         intervals[i][0] > intervals[j][0] ||
//         (intervals[i][0] === intervals[j][0] &&
//           intervals[i][1] > intervals[j][1])
//       ) {
//         const temp = intervals[i];
//         intervals[i] = intervals[j];
//         intervals[j] = temp;
//       }
//     }
//   }

//   // for (let i = 0; i < intervals.length; i++) {
//   //   let min = intervals[i][0];
//   //   let max = intervals[i][1];
//   //   for (let j = i + 1; j < intervals.length; j++) {
//   //     if (max >= intervals[j][0]) {
//   //       if (max < intervals[j][1]) max = intervals[j][1];
//   //       i++;
//   //     } else break;
//   //   }
//   //   newArray.push([min, max]);
//   // }

//   return newArray;
// };

// ** Approach 2: Optimal **
var merge = function (intervals) {
  let newArray = [];
  intervals.sort((a, b) => a[0] - b[0]);
  // for (let i = 0; i < intervals.length - 1; i++) {
  //   for (let j = i + 1; j < intervals.length; j++) {
  //     if (
  //       intervals[i][0] > intervals[j][0] ||
  //       (intervals[i][0] === intervals[j][0] &&
  //         intervals[i][1] > intervals[j][1])
  //     ) {
  //       const temp = intervals[i];
  //       intervals[i] = intervals[j];
  //       intervals[j] = temp;
  //     }
  //   }
  // }
  newArray.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (newArray[newArray.length - 1][1] >= intervals[i][0]) {
      if (newArray[newArray.length - 1][1] < intervals[i][1])
        newArray[newArray.length - 1][1] = intervals[i][1];
    } else newArray.push(intervals[i]);
  }

  return newArray;
};

export const main = () => {
  console.log(
    merge([
      [8, 10],
      [1, 3],
      [2, 6],
      [15, 18],
    ])
  );
  console.log(
    merge([
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ])
  );
  console.log(
    merge([
      [1, 4],
      [4, 5],
    ])
  );
  console.log(
    merge([
      [1, 4],
      [0, 4],
    ])
  );
};
