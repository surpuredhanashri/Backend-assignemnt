var matchers = require("./nottoBeNull");

describe("Matchers suite", () => {
  test("Use the Matchers toBeTruthy() and toBeFalsy()", () => {
    var bData = true;
    expect(bData).toBeTruthy();
    var empObj = matchers.returnObject();
    bData = false;
    expect(bData).toBeFalsy();
    empObj = null;
    expect(empObj).toBeFalsy();
  });
});
