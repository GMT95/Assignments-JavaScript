function square(num) {
    return num * num;
}

function hyp(base,perp) {
    var hypotenuse = (Math.sqrt(square(base) + square(perp))).toFixed(2);
    return hypotenuse;
}

var b = +prompt("Enter area of base of a triangle");
var p = +prompt("Enter area of perpendicular of triangle");

alert("Hypotenuse: "+ hyp(b,p));