const add = function() {
	return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function() {
	arr = arguments[0];
  return arr.reduce((prev, item) => prev+item, 0);
};

const multiply = function() {
  arr = arguments[0];
  return arr.reduce((prev, item) => prev*item, 1);
};

const power = function() {
	return Math.pow(arguments[0], arguments[1]);
};

const factorial = function() {
	num = arguments[0];
  output = 1;
  for(i=1; i<=num; i++) {
    output *= i;
  }
  return output;
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
