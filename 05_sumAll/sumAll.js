const sumAll = function (x, n) {
  if (!Number.isInteger(x) || !Number.isInteger(n)) return "ERROR";
  if (x < 0 || n < 0) return "ERROR";
  let result = 0;
  if (x < n) {
    for (let i = x; i <= n; i++) {
      result += i;
    }
    return result;
  } else if (x > n) {
    for (let i = n; i <= x; i++) {
      result += i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = sumAll;
