var matchers = require("./toContain");

describe("Matchers suite", () => {
  test("to use matcher toConatin() and checking the content of th array for a name", () => {
    var strNametoSearchfor = "Dhanashri";
    expect(matchers.returnArrNames()).toContain(strNametoSearchfor);
  });

  beforeEach(() => {
    console.log("In BeforeEach()");
  });

  afterEach(() => {
    console.log("In AfterEach()");
  });

  beforeAll(() => {
    console.log("beforeAll()");
  });

  afterAll(() => {
    console.log("afterAll()");
  });
});
