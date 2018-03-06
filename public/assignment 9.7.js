function factorial(num) {
    var factorial = 1;
    for(i = 1;i <= num;i++) {
        factorial = factorial * i;
    }
    return factorial;

}

var n = +prompt("Enter a number to find its factorial");

var ans = alert(n + "! = " + factorial(n));