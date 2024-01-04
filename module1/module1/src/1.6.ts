// function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(2, "3"); not possible
add(3, 4);

// arrow funcrio\

const addArrow = (num1: number, num2: number = 20): number => num1 + num2;
addArrow(10, 20);

// default value
function addWithDefault(num1: number, num2: number = 100): number {
  return num1 + num2;
}

// method inside object
const poorUser = {
  name: "rokib",
  balance: 0,
  addBalance(number: number): string {
    return `My new balance is ${this.balance + number}`;
  },
};

const myArr = [10, 20, 30, 40, 50];
const doubledArray: number[] = myArr.map(
  (element: number): number => element * element
);
