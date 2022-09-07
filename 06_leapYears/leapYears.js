const leapYears = function(year) {
    // years divisible by four 
    if (!(year % 4)) {
        return true;
    } else if (!(year % 100) && !(year % 400)) { // years divisible by 400 and 100 
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
