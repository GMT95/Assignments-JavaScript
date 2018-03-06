function diceRoll() {
    var random = Math.ceil(Math.random() * 6);
    return random;
}

document.write("Refresh the page to see a different number from 1-6" + "<br>");

document.write("Dice Roll Answer: ",diceRoll());