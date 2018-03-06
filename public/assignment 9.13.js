// function swap(a,b) {
//     var temp = a;
//     a = b;
//     b = temp;
// }
//cannot use above function in JS bcz JS is pass by value
function swap(arr,a,b) {
  
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
   
}

function sort(arr) {
    for(var i = 0;i < arr.length;i++) {
        for(var j = 0;j<arr.length - 1;j++) {
            //console.log(arr);
            //console.log(arr[j+2]);
            if(arr[j] > arr[j+1]) {
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}

var input = +prompt("How many Array elements you want");
var myArray = []; 
for(i = 0;i < input;i++){
     myArray[i] = +prompt("Enter "+(i+1)+" element");
}

document.write("Array in Sorted Order: "+ sort(myArray))

