function reverse(a) {
    var x = a[(a.length)-1];
    for (var i = (a.length - 1);i > 0;i--) {
        //console.log(x);
        x += a[i-1];
    }
    return x;
}

var input = prompt("Please enter a number");

document.write("Reversed Number is: ",reverse(input));