const sumAll = function(num1, num2) {
    let endNum;
    let startNum;
    let runningTotal = 0;
    console.log("num1", num1);
    console.log("num2", num2);
    // return ERROR with negative numbers and non-numbers
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else if (num1 > num2) { // Find which number is the smallest (startNum)
        endNum = num1;
        startNum = num2;
    } else {
        endNum = num2;
        startNum = num1;
    }
    console.log("endNum", endNum);
    console.log("startNum", startNum);

    // Add consecutive nums, from startNum to endNum
    for (let i = startNum; i <= endNum; i++) {
        runningTotal += i;
    }
    console.log("runningTotal", runningTotal)
    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
