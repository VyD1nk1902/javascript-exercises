// 3 điều kiện để thỏa mãn là một năm nhuận ( leapYear )

// 1. Năm đó chia hết cho 4 và không chia hết cho 100.
// 2. Năm đó chia hết cho 400 thì chắc chắn là năm nhuận.
// 3. Nếu chỉ chia hết cho 100 mà ko chia đc cho 400 thì ko p năm nhuận.

const leapYears = function (x) {
  if ((x % 4 === 0 && x % 100 !== 0) || x % 400 === 0) {
    const leapYearsCheck = true;
    return leapYearsCheck;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
