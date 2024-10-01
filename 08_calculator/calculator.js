const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	mappedArr = arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return mappedArr
};

const multiply = function(arr) {
	mappedArr = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return mappedArr
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num1) {
  if (num1 === 0) return 1
  
  
  const arr = []
  for (i=1;i<=num1;i++) {
    arr.push(i)
  }
// console.log(arr)  
mappedArr = arr.reduce((total, currentItem) => {  
return total * currentItem;
}, 1);
return mappedArr
};


console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
