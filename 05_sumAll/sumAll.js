const sumAll = function(numOne, numTwo) {
    if (typeof(numOne) != typeof(0) || typeof(numTwo) != typeof(0) 
        || numOne < 0 || numTwo < 0 || !Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return "ERROR";
    } else {
        sum = 0;
        if (numOne >= numTwo) {
            start = numTwo;
            end = numOne;
        } else {
            start = numOne;
            end = numTwo;
        }
        for (i=start; i<=end; i++) {
            sum += i;
        }
        return sum;
    }
};

console.log(sumAll(1, -2));

// Do not edit below this line
module.exports = sumAll;
