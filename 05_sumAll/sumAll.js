const sumAll = function(min,max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    if (min<0 || max<0) {
        return "ERROR"
    }

    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }

    sum = 0
    for (let i = min;i<max;i++) {
        sum+=i
        // console.log(i)
    }
    return sum
};

console.log(sumAll(10,20))

// Do not edit below this line
module.exports = sumAll;
