
var matchers = require ("./toContain")

describe("Matchers suite",()=>{
test("to use matcher toConatin() and checking the content of th array for a name", () => {
  var strNametoSearchfor = "Dhanashri";
  expect(matchers.returnArrNames()).toContain(strNametoSearchfor);
});
})