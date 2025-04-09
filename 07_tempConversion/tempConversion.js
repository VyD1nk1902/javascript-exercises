const convertToCelsius = function (x) {
  const celsiusConvert = Math.round((x - 32) * (5 / 9) * 10) / 10;
  return celsiusConvert;
};

const convertToFahrenheit = function (y) {
  const fahrenheitConvert = Math.round((y * (9 / 5) + 32) * 10) / 10;
  return fahrenheitConvert;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
