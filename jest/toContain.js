const matchers = {
  returnObject: function () {
    var empObj = {
      id: 103,
      name: "teja",
      dep: "CS",
      designation: "Full Stack",
    };
    return empObj;
  },

  returnURL: function () {
    var strURL = "https://www.google.co.in/";
    return strURL;
  },

  returnArrNames: function () {
    var ArrNames = ["charan", "Dhanashri", "Prakash", "pallav", "surbhi"];
    return ArrNames;
  },
};

module.exports = matchers