const user = {
  register: function (uid, pswd, role) {
    if (uid == 101 && pswd == "Dhana" && role == "admin") {
      return "Registration is successful";
    } else return "Registration failed";
  },
  login: function (emp) {
    if (emp.uid == 101 && emp.pswd == "Dhana") return "Valid User";
    else return "Invalid User";
  },
};
module.exports = user;
