const checkLib = require("./objects");

test("check if bookcard is send or not", () => {
  var bookObj = checkLib.check(1);
  var bookObj1 = checkLib.check(8);

  console.log("returned data from the funtion is" + JSON.stringify(bookObj));
  console.log("returned data from the funtion is" + JSON.stringify(bookObj1));

  expect(bookObj).not.toBeNull();
  expect(bookObj1).toBeNull();
});

test("cheching if bookid is present or not", () => {
  expect(checkLib.searchArrayByID()).toContain(2);
});
