import findTargetSumWays from './memorized';

it('findTargetSumWays([1, 1, 1, 1, 1], 3)', () => {
  expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
});

it('findTargetSumWays([1, 1, 1, 1], 4)', () => {
  expect(findTargetSumWays([1, 1, 1, 1], 4)).toBe(1);
});

it('findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)', () => {
  expect(findTargetSumWays([0, 0, 0, 0, 0, 0, 0, 0, 1], 1)).toBe(256);
});

it('findTargetSumWays([0, 0], 0)', () => {
  expect(findTargetSumWays([0, 0], 0)).toBe(4);
});

it('findTargetSumWays([0, 0], 0)', () => {
  expect(findTargetSumWays([0, 0], 0)).toBe(4);
});

it('findTargetSumWays([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1], 1)', () => {
  expect(
    findTargetSumWays(
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      1,
    ),
  ).toBe(524288);
});
