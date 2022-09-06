const removeFromArray = function() {
    // Use arguments object to access all arguments
    let array = argument[0];
    // Find out how many arguments are in object
    let argObjectSize = Object.keys(argumentsObj).length;
    if (argObjectSize < 2) {
        return argument;
    }

    let returnArray = "";

    for (let i = 0; i < array.length; i++){
            (let j = 0; j < argObjectSize; j++) {
                // If current element matches current arg
                if (array[i] === argument[j]) {
                    // Deleted items will be replaced by "null"
                    delete array[i];
                }
                // If current element is not null
                if (array[i]){
                    returnArray += array[i];
                }
        }
    }
    return returnArray;
    // removes a single value
    // removes multiple values => removeFromArray([1, 2, 3, 4], 3, 2) -> ([1, 4]);
    // ignores non present values => removeFromArray([1, 2, 3, 4], 7, "tacos") -> ([1, 2, 3, 4])
    // can remove all values => removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)) -> ([]);
    // works with strings => removeFromArray(["hey", 2, 3, "ho"], "hey", 3)) -> ([2, "ho"])
    // only removes same type => expect(removeFromArray([1, 2, 3], "1", 3)) -> ([1, 2]);






};

// Do not edit below this line
module.exports = removeFromArray;
