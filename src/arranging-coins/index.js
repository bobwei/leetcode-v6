/**
 * @param {number} n
 * @return {number}
 */
/*
  (1 + k) * k / 2 = n
  k^2 + k = 2 * n
  k^2 + k + 1 / 4 = 2 * n + 1 / 4
  (k + 1 / 2)^2 = 2 * n + 1 / 4
  k + 0.5 = Math.sqrt(2 * n + 1 / 4)
  k = Math.sqrt(2 * n + 0.25) - 0.5
*/
const arrangeCoins = n => Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);

export default arrangeCoins;
