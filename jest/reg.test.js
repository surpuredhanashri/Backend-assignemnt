var user = require("./register");

test("Registration Validation", () => {
  expect(user.register(101, "teja", "admin")).toBe(
    "Registration is successful"
  );
});
test("Registration Validation", () => {
  expect(user.register(101, "admin")).toBe("Registration failed");
});
test("Login", () => {
  let emp = {
    uid: 101,
    pswd: "Dhana",
  };
  expect(user.login(emp)).toEqual("Valid User");
});
test("Login", () => {
  let emp = {
    uid: 101,
    pswd: "Dhan",
  };
  expect(user.login(emp)).toEqual("Invalid User");
});
