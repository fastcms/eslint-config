/**
 * Get sum of a and b.
 *
 * @param {number} a Number a
 * @param {number} b Number b
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
  return a + b;
}

test('sum', (done) => {
  expect(sum(4, 5)).toEqual(9);
  done();
});
