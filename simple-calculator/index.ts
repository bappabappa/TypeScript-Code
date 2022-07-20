import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';






function main(): void {


    const firstStr: string = question('Enter first number\n ');
    const operator: string = question('Enter operator\n ');
    const secondStr: string = question('Enter second number\n ');


    // console.log(firstStr,operator,secondStr);

    const firNumber = isNumber(firstStr);
    // console.log(firNumber);

    const op = isOperator(operator);
    // console.log(op);


    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    // console.log(validInput);

    if (validInput) {
        console.log('vaild man');

        const firsNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculte(firsNum, operator as Operator, secondNum);
        console.log(result);
    }
    else {
        console.log('\ninvalid input\n');
        main()
    }


}




// check number 
function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    // const isNum:boolean =Boolean(isNaN(maybeNum));
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}


// calculate 
function calculte(firsNum: number, operator: Operator, secondNum: number) {

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

function isOperator(operator: string): boolean {
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