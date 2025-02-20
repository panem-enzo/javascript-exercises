const fibonacci = function(num) {
    arr = [1, 1];
    num = parseInt(num);
    if (num < 0) {
        return "OOPS"
    } else if (num === 0) {
        return 0;
    } else if (num === 1 || num === 2) {
        return 1;
    } else {
        for (i=2; i < num; i++) {
            arr.push(arr[i-2]+arr[i-1]);
        }
    }
    return arr.pop();
};

// Do not edit below this line
module.exports = fibonacci;
