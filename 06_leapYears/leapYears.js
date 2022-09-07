const leapYears = function(year) {
    // years divisible by 400 and 100 
    if (!(year % 100) && year % 400) { 
        return false;
    } else if (!(year % 4)) { // years divisible by four
            return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
