const reverseString = function(string) {
    if (!string) {
        return string;
    }
    string = string.split("");
    string = string.reverse();
    return string.join();
};

// Do not edit below this line
module.exports = reverseString;
