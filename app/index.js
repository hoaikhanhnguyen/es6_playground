
import * as math from './math';
import $ from 'jquery';

const {num1, num2, zero} = math;

console.log(`The sum of ${num1} and ${num2} is ${math.add(num1, num2)}`);
console.log(`Divide by zero result: ${math.divide(num1, zero)}`);
console.log(`The subtraction of ${num1} and ${num2} is ${math.subtract(num1, num2)}`);
console.log(`The multiplication of ${num1} and ${num2} is ${math.multiply(num1, num2)}`);
console.log(`The division of ${num1} and ${num2} is ${math.divide(num1, num2)}`);

$('#root').append('<h1>I am helping</h1>');