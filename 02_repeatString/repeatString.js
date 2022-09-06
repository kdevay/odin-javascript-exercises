const repeatString = function(string, num) {
    let finalString = "";
    if (num < 1){
        return "ERROR";
    }
    for (let i = 0; i < num; i++){
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
