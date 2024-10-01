const getTheTitles = function (dict) {
  arr = [];
  for (i = 0; i < dict.length; i++) {
    arr.push(dict[i].title);
  }
  return arr;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
