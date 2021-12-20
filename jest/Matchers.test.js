const matchers = require("./Matchers");

describe("Matchers suite", () => {
  test("comparing object with toBe() and toEqual(", () => {
    var empObj = {
      "id": 103,
      "name": "dhanu",
      "dep": "CS",
      "designation": "Full Stack"
    }
    expect(matchers.returnObject()).toEqual(empObj);
  });
});
