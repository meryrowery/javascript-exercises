const fibonacci = function (index) {
  arr = [1, 1];
  index = parseInt(index);
  if (index === 0) {
    return 0;
  } else if (index < 0) {
    return "OOPS";
  }

  for (i = 2; i < index; i++) {
    newValue = arr[i - 1] + arr[i - 2];
    arr.push(newValue);
  }
  return arr[i - 1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
