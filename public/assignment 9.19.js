function palindromeStr(Str) {
   var x = Str[(Str.length - 1)];
   for(i = Str.length - 1;i > 0;i--){
       x += Str[i - 1];
   }
   console.log(x);
   if(x === Str) {
       return true;
   }
   else {
       return false;
   }
}

var input = prompt("Enter a String to check if it is Palindrome")

if(palindromeStr(input)) {
    document.write("You have entered a Palindrome String: --> "+input);
}

else {
    document.write("You have not entered a Palindrome String: --> "+input);
}
