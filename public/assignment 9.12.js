function rectArea(width,height) {
     return width * height;
 }

 var width = +prompt("Enter width of rectangle in units");
 var height = +prompt("Enter height of rectangle in units");

 alert("Area of rectangle is: "+rectArea(width,height) +" square units");