// import React from 'react';

test('Our first test', () => {
  // expect(actualValue).matcher(expectedValue)
  expect(1 + 1).toBe(2);
});

test('Our second test', () => {
  expect(5).toBeGreaterThan(3);
});

/*
// Uncomment to see a test fail
test('Our failing test', () => {
  expect(2 + 2).toBeNull();
});
*/

export {};
