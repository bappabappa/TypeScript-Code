"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number\n ');
    var operator = (0, readline_sync_1.question)('Enter operator\n ');
    var secondStr = (0, readline_sync_1.question)('Enter second number\n ');
    // console.log(firstStr,operator,secondStr);
    var firNumber = isNumber(firstStr);
    // console.log(firNumber);
    var op = isOperator(operator);
    // console.log(op);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);
    if (validInput) {
        console.log('vaild man');
        var firsNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculte(firsNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}
// check number 
function isNumber(str) {
    var maybeNum = parseInt(str);
    // const isNum:boolean =Boolean(isNaN(maybeNum));
    var isNum = !isNaN(maybeNum);
    return isNum;
}
// calculate 
function calculte(firsNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firsNum + secondNum;
        case '-':
            return firsNum - secondNum;
        case '*':
            return firsNum * secondNum;
    }
}
// check operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
            return true;
        default:
            return false;
    }
}
// main();
