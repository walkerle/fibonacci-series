function fibonacci(num) {
  // type your code here
  let result = -1;
  let firstNum = 0;
  let secondNum = 1;
  // console.log('fibonacci(num): num =', num);
  for(let i = 0; i <= num; i++) {
    // console.log('i', i);
    if(i === 0) {
      result = firstNum;
    } else if(i === 1) {
      result = firstNum + secondNum;
    } else if(i > 1) {
      result = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = result;
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
  // console.log("-----");
  // console.log("Expecting: 3");
  // console.log("=>", fibonacci(4));
  // console.log("-----");
  // console.log("Expecting: 0");
  // console.log("=>", fibonacci(0));
  // console.log("-----");
  // console.log("Expecting: -1");
  // console.log("=>", fibonacci(-1));
  // console.log("-----");
  // console.log("Expecting: 1");
  // console.log("=>", fibonacci(2));
  // console.log("-----");
  // console.log("Expecting: 2");
  // console.log("=>", fibonacci(3));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Create helper functions:
// 1. Create a function that takes in one argument to determine how many times to iterate
// 2. Need something to store the first number and second number as well as reassign after each loop