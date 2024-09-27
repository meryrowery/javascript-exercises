const convertToCelsius = function(temp) {
  let tempC = (temp - 32) * (5 / 9);
  return Math.round(tempC * 10) / 10; // Round to one decimal place
};

const convertToFahrenheit = function(temp) {
  let tempF = temp * (9 / 5) + 32;
  return Math.round(tempF * 10) / 10; // Round to one decimal place
};

console.log(convertToCelsius(32))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
