const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        output = "";
        for(i=0;i<num;i++) {
            output += string;
        }
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
