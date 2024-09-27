// const removeFromArray = function(array, item) {
//     for (let i=0; i < item.length; i++) {
//         let item = items[i];
//         let index = array.indexOf(item);
//         while (index !== -1) {
//                 array.splice(index,1)
//                 index = array.indexOf(item)
//         }
//     }
//     return array
// }

// console.log(removeFromArray([1, 2, 2, 2, 4, 3], 2))

// // Do not edit below this line
// module.exports = removeFromArray;

const removeFromArray = function(array, ...items) {
    // Loop through each item to remove
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let index = array.indexOf(item);

        // Remove all occurrences of the current item
        while (index !== -1) {
            array.splice(index, 1);  // Remove the item at index
            index = array.indexOf(item);  // Find the next occurrence
        }
    }
    return array;
}

console.log(removeFromArray([1, 2, 2, 2, 4, 3], 2));  // Output: [1, 4, 3]
console.log(removeFromArray([1, 2, 2, 2, 4, 3], 2, 3));  // Output: [1, 4]

// Do not edit below this line
module.exports = removeFromArray;
