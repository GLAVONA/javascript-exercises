const removeFromArray = function(arr, ...num) {
    num.forEach(function(x){
        while(arr.indexOf(x)!=-1){
            arr.splice(arr.indexOf(x),1);
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
