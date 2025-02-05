const reverseString = function(string) {
    stringArray = string.split("");
    reversedArray = []
    for (i=stringArray.length-1;i>-1;i--) {
        reversedArray.push(stringArray[i]); 
    }
    return reversedArray.join("");
};

console.log(reverseString('hey there!'));

// Do not edit below this line
module.exports = reverseString;
