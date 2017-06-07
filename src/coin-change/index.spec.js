import coinChange from './index';

it('coinChange([1, 5], 11)', () => {
  expect(coinChange([1, 5], 11)).toBe(3);
});

it('coinChange([2], 3)', () => {
  expect(coinChange([2], 3)).toBe(-1);
});

it('coinChange([1, 5], 12)', () => {
  expect(coinChange([1, 5], 12)).toBe(4);
});
