// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let product = 1;
  let sum = 0;

  while (n > 0) {
    const rem = n % 10;
    product *= rem;
    sum += rem;
    n = parseInt(n / 10);
  }

  return product - sum;
};

export const main = () => {
  console.log(subtractProductAndSum(234));
  console.log(subtractProductAndSum(4421));
};
