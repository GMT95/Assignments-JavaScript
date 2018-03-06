function vowelCount(Str) {
    var count = 0;
    for(i = 0; i <= (Str.length - 1);i++) {
        //console.log(Str[i]);
        if(Str[i] === 'a' || Str[i] === 'e'|| Str[i] === 'i'|| Str[i] === 'o' || Str[i] === 'u' ) {
            count = count + 1;
        }
        
    }
    return count;
}

var input = prompt("Please enter a Sentence");

document.write("Your Sentence has: "+vowelCount(input)+" vowels");