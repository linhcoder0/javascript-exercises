const leapYears = function(x) {
    if (x %4 === 0) {
        if(x % 100 === 0 && x % 400 === 0){
        return true;
        }
        if(x % 100 === 0){
            return false;
        }
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
