const ftoc = function(temp) {
  let result = parseFloat((temp-32)*(5/9));
  return result%10!=0?Number(result.toFixed(1)):Number(parseInt(result));
};

const ctof = function(temp) {
  let result = parseFloat((temp*(9/5)+32));
  return result%10!=0?Number(result.toFixed(1)):Number(parseInt(result));
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
