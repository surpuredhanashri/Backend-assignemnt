var condition = require("./condition");

test("b  is greater a", () => {
  expect(condition.greater(2, 8)).toBe(8);
});

test("a,b,c greater", () => {
  expect(condition.Largestof3numbers(2, 8, 4)).toBe(8);
});

test("factorial", () => {
  expect(condition.Factorial(3)).toBe(6);
});

test("factorial", () => {
  var a = true;
  expect(condition.EvenOdd(4)).toBeTruthy();

  var a = false;
  expect(condition.EvenOdd(4)).toBeTruthy();
});

test("Array", () => {
  expect(condition.ArrayEle(arrele)).toBe(9);
});

test("PresentInArray", () => {
  expect(condition.PresentInArray(arrele, 3)).toBe("Present in Array");
});
const arrele = [1, 2, 3, 9];
