const palindromes = function (str) {
    str = (str.replace(/[^a-zA-Z]/g, '')).toLowerCase();
    newStr = "";
    for (i=str.length-1; i>=0; i--) {
        newStr += str[i]
    }
    return str === newStr
};

console.log(palindromes("A car, a man, a maraca"))

// Do not edit below this line
module.exports = palindromes;
