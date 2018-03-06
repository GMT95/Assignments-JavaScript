function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var input = +prompt("How many elements you want in your array");

var myArray = [];

for (var i = 0; i < input; i++) {
    myArray[i] = +prompt("Enter "+ (i+1) +" element of your array");
}

document.write("Your Array :" + myArray + "<br>");
document.write("Sum of your Array: " + arraySum(myArray));