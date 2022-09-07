const leapYears = function(year) {
    // years divisible by four 
    if (!(year % 4)) {
        console.log("hi");
        } else if (!(year % 100) && !(year % 400)) { // years divisible by 400 and 100 
        console.log("hi");
        }
};

// Do not edit below this line
module.exports = leapYears;
