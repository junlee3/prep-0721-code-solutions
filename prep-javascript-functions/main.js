function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(4);
console.log('minutes', minutes);

function getGreeting(name) {
  console.log('Hello ' + name);
}

getGreeting('World');

function addAndMultiplyBy5(x, y) {
  return (x + y) * 5;
}

var product = addAndMultiplyBy5(2, 3);
console.log('product', product);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}

var quotient = multiplyAndDivideBy5(5, 5);
console.log('quotient', quotient);

function subtractTwoNumbers(x, y) {
  return x - y;
}

var subtracted = subtractTwoNumbers(5, 4);
console.log('subtracted', subtracted);

function getCircleCircumference(x) {
  return x * 6.28;
}

var radius = getCircleCircumference(5);
console.log('radius', radius);

function getFullName(firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}

getFullName('jay', 'lo');

function cube(x) {
  return x * x * x;
}

var cubed = cube(3);
console.log('cubed', cubed);
