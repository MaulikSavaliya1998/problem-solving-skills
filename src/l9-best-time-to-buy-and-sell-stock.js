// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - min);
    min = Math.min(min, prices[i]);
  }
  return profit;
};

export const main = () => {
  console.log(maxProfit([7, 1, 5, 3, 6, 4]));
  console.log(maxProfit([7, 6, 4, 3, 1]));
};
