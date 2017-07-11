/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
const memorizeWith = ({ createKey = (...args) => args.join(',') } = {}, fn) => {
  const cache = {};
  return (...args) => {
    const key = createKey(...args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

/*
  Memorized version of target-sum, but Time Limit Exceeded
*/
const findTargetSumWays = (...args) => {
  const fn = memorizeWith({}, (nums, S, n = nums.length) => {
    if (n <= 0) {
      return S === 0 ? 1 : 0;
    }
    return fn(nums, S - nums[n - 1], n - 1) + fn(nums, S + nums[n - 1], n - 1);
  });
  return fn(...args);
};

export default findTargetSumWays;
