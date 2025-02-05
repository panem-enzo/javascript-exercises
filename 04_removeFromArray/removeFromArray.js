const removeFromArray = function() {
    numItems = arguments.length;
    array = arguments[0];
    for(i=1; i<numItems; i++) {
        while (array.indexOf(arguments[i]) != -1) {
            removeIndex = array.indexOf(arguments[i]);
            array.splice(removeIndex, 1);
        }
    }
    return array;
};

console.log(removeFromArray([1, 2, 2, 5, 3, 4], 1, 2, 4));

// Do not edit below this line
module.exports = removeFromArray;