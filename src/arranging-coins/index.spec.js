import arrangeCoins from './index';

it('can arrangeCoins 5', () => {
  const result = arrangeCoins(5);
  expect(result).toBe(2);
});

it('can arrangeCoins 8', () => {
  const result = arrangeCoins(8);
  expect(result).toBe(3);
});

it('can arrangeCoins 6', () => {
  const result = arrangeCoins(6);
  expect(result).toBe(3);
});
