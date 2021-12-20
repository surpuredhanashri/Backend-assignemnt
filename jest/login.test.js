var login = require("./login");

test("Login Validation", () => {
  expect(login(101, "admin")).toBe("Valid User");
});
test("Login Validation", () => {
  expect(login(101, "amin")).toBe("Invalid User");
});
