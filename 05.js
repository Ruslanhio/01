let sum = 1;

function addThree() {
  sum = sum + 2;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();


let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
 item = arr.shift();
 return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

 