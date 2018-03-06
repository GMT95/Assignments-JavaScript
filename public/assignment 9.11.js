function arrayMax(arr) {
    var max = arr[0]
    for(i = 0;i < arr.length;i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

var input = +prompt("How many elements you want in your array");
var myArray = [];
for(j = 0;j < input;j++){
    myArray[j] = +prompt("Enter "+(j+1)+" element of your array");
}

document.write("Maximum element of Array is: "+arrayMax(myArray));