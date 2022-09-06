const sumAll = function(from, to) {
    //gauss sumation -> number of elements * average of 1st and last number -> (1 + nLast - nFirst) * (nFirst + nLast)/2

    if (from < 0 || to < 0 || typeof(from) != typeof(1) || typeof(to) != typeof(1)){
        return "ERROR"
    }

    if (from > to){
        let tmp = to;
        to = from;
        from = tmp;
    }

    let result = (1+to-from)*(from+to)/2;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
