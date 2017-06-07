/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/*
  f(coins, n) = min{ 1 + f(coins, n - coins[i]) }, if n - coins[i] >= 0, i from 0 to coins.length
*/
const coinChange = (coins, amount) => {
  const f = [...new Array(amount + 1)].map(() => Infinity);
  f[0] = 0;
  for (let n = 1; n <= amount + 1; n += 1) {
    for (let i = 0; i < coins.length; i += 1) {
      if (n - coins[i] >= 0) {
        f[n] = Math.min(f[n], 1 + f[n - coins[i]]);
      }
    }
  }
  if (f[amount] < Infinity) {
    return f[amount];
  }
  return coinChange.NULL_VALUE;
};

coinChange.NULL_VALUE = -1;

export default coinChange;
