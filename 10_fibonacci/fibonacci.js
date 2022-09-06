const fibonacci = function(n) {
    n = Number(n);
    if (n<0){ return "OOPS"};
    let twoBehind = 0;
    let oneBehind = 1;
    let current = 1;

    for(let i = 1; i<n; i++){
        current = oneBehind + twoBehind;
        twoBehind = oneBehind;
        oneBehind = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
