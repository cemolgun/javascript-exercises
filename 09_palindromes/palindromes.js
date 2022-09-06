const palindromes = function (str) {
    str = str.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s/g, "").toLowerCase();
    let comparisson = "";
    for (let i=str.length-1;i>=0;i--){
        comparisson += str[i];
    }
    if (comparisson == str){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
