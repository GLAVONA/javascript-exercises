const palindromes = function (str) {
    const strip = str.replace(/[^a-zA-Z]/g,"").toLowerCase();
    const revStrip = strip.split('').reverse().join('');
    return revStrip===strip;
}

// Do not edit below this line
module.exports = palindromes;
