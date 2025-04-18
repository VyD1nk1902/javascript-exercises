const fibonacci = function (number) {
  if (isNaN(number) || number < 0) {
    return "OOPS";
  }

  number = Number(number);

  if (number <= 1) {
    return number;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
};

// Solution 2:
// const fibonacci = function (number) {
// checks argument's type and makes sure we use
// a number throughout rest of function.
//   let numberCheck;
//   if (typeof number !== "number") {
//     numberCheck = parseInt(number);
//   } else {
//     numberCheck = number;
//   }

//   if (numberCheck < 0) return "OOPS";
//   if (numberCheck == 0) return 0;

//   let firstRound = 1;
//   let secondRound = 0;

//   for (let i = 2; i <= numberCheck; i++) {
//     let current = firstRound + secondRound;
//     secondRound = firstRound;
//     firstRound = current;
//   }

//   return firstRound;
// };

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count]

// Do not edit below this line
module.exports = fibonacci;
