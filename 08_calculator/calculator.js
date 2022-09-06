const add = function() {
  let result = arguments[0]+arguments[1];
  return result;
};

const subtract = function() {
  let result = arguments[0]-arguments[1];
  return result;
};

const sum = function(arr) {
  let result = 0;
  for (let i = 0; i< arr.length; i++){
    result += Number(arr[i]);
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for (let i = 0; i< arr.length; i++){
    result *= Number(arr[i]);
  }
  return result;
};

const power = function() {
	let result = arguments[0] ** arguments[1];
  return result;
};

const factorial = function() {
	let result = 1;
  for (let i = 0; i< arguments[0]; i++){
    result *= (i+1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
