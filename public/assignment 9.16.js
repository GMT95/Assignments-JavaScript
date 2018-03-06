function power(base,exponent) {
    var result = 1;
    if (base === 0) {
        return 0;
    }
    else {
        for (var i = 1; i <= exponent;i++) {
            result = result * base;
        }
        return result;
    }
    
}

var number = +prompt("Enter a base number to calculate its power");
var pwr = +prompt("Enter a number as exponent for the base number");

document.write(number + "^" + pwr  + " = " + power(number,pwr));