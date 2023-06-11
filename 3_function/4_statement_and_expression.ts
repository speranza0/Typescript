/**
 * Statement adn Expression
 */

// statement(문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// expression(표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */
function add(x: number, y: number): number {
  return x + y;
}

function subtract(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 */
type CalculationTYpe = (x: number, y: number) => number;

const add2: CalculationTYpe = function (x, y) {
  return x + y;
};

const subtract2: CalculationTYpe = function (x, y) {
  return x - y;
};

const multiply2: CalculationTYpe = function (x, y) {
  return x * y;
};

const divide2: CalculationTYpe = function (x, y) {
  return x / y;
};
