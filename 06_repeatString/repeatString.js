const repeatString = function(str, x) {
    let arr = [];
    if(x < 0)
        {return "ERROR"}
    for(let i = 0; i < x; i++){
        arr.push(str)
        
    } 
   return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
