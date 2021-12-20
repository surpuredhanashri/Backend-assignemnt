// var sum = require("./sum");
// test("Testing sum()", () => {
//   expect(sum(2, 3)).toBe(5);
// });




const { add, mul, sub, div } = require('./opeators');

test('add', () => {
  expect(add(2, 3)).toBe(5);
});

test('3 * 4 = 12', () => {
  expect(mul(3, 4)).toBe(12);
});

test('5 - 6 = -1', () => {
  expect(sub(5, 6)).toBe(-1);
});

test('8 / 4 = 2', () => {
  expect(div(8, 4)).toBe(2);
});
