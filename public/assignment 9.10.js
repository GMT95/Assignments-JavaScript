function arrInput(arr) {
    for(var i = 0;i < arr.length;i++){
        document.write(arr[i]+"<br>");
    }
}

var input = +prompt("How many elements you want in your array");
var myArray = [];
for(var j = 0;j < input;j++){
    myArray[j] = +prompt("Enter "+(j+1)+" element of your array");
}

arrInput(myArray);