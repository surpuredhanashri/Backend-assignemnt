const condition = {
  greater: function (a, b) {
    if (a < b) return b;
    else return a;
  },

  Largestof3numbers: function (a, b, c) {
    return a > b ? (a > c ? a : c) : b > c ? b : c;
  },

  Factorial: function (a) {
    tmp = 1;
    for (i = 1; i <= a; i++) {
      tmp = tmp * i;
    }
    return tmp;
  },

  EvenOdd: function (a) {
    if (a % 2 == 0) {
      return true;
    } else return false;
  },

  ArrayEle: function (arr) {
    var n = 0;
    for (i in arr) {
      n += 1;
    }
    for (i = 1; i < n; ++i) {
      if (arr[0] < arr[i]) arr[0] = arr[i];
    }
    return arr[0];
  },

  PresentInArray: function (arr, x) {
    if (x in arr) return "Present in Array";
    else return "Not Present in Array";
  },
};

module.exports = condition;
