const removeFromArray = function() {
    // Use arguments object to access all arguments
    let array = arguments[0];

    // Find out how many arguments are in object
    let argObjectSize = Object.keys(arguments).length;
    if (argObjectSize < 2) {
        return array;
    }

    let returnArray = [];

    for (let i = 0; i < array.length; i++) {
        for (var j in arguments) {
            // Exclude the first argument
            if (j === 0) {
                j += 1;
            }
            // If current element matches current arg
            if (array[i] === arguments[j]) {
                delete array[i]; // *Deleted items are replaced by "null"*
            }
        }
        // If current element is not null
        if (array[i]) {
            returnArray.push(array[i]);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
