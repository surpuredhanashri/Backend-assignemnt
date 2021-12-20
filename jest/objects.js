let arr = [
  { id: 1, name: "b1" },
  { id: 2, name: "b2" },
  { id: 3, name: "b3" },
  { id: 4, name: "b4" },
];

function check(id1) {
  var flag = 0;
  arr.forEach((element) => {
    if (element.id === id1) {
      flag = 1;
      return element;
    }
  });
  if (flag == 0) {
    return null;
  }
}

function searchArrayByID() {
  return arr.map((data) => data.id);
}

module.exports.check = check;
module.exports.searchArrayByID = searchArrayByID;
