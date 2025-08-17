const removeFromArray = function(arr, ...x) {
    const result = arr.filter(item => !x.includes(item))
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;



