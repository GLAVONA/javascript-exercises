const sumAll = function(firstInt, secondInt) {
    if(typeof firstInt !== 'number' || typeof secondInt !== 'number'){
        return "ERROR";
    }
    if(firstInt<0 || secondInt <0){
        return "ERROR";
    }
    let result = 0;

    let bigNum=0;
    let smallNum=0;

    if(firstInt>=secondInt)
    {
        bigNum=firstInt;
        smallNum=secondInt
    }
    else {
        bigNum = secondInt;
        smallNum = firstInt;
    }

    for (let i = smallNum; i <= bigNum; i++) {
        result +=i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
