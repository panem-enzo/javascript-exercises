const palindromes = function (str) {
    str = str.toLowerCase().split(" ");
    str = str.join("");
    str = str.split(",");
    str = str.join("");
    // Two pointer
    i = 0;
    j = str.length-1;
    while (i < j) {
        if (str[j] === "!" || str[j] === ".") {
            j--;
        }
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;