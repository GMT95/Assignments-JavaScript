function calc(num1, op, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '/':
            return num1 / num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '%':
            return num1 % num2;
            break;
        default:
            return "Incorrect Operator";
    }
}

var n1 = +prompt("Enter First Number");
var n2 = +prompt("Enter Second Number");
var opr = prompt("Enter Operator +,-,*,/,%");

alert("Result: "+calc(n1,opr,n2));