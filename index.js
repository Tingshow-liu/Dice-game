/* Dice 1 */
// Generate random numbers for dice faces between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Generate dice picture file names based on the random number generated
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var diceImageSrc1 = "./images/" + randomDiceImage1;

// Change the image sources of from the original dice6 to these random dices
// 1. Select the 1st "img" (the first dice)
// 2. setAttribute: first select the attribute we want to change (src) and replace the old one with "diceImageSrc"
document.querySelectorAll("img")[0].setAttribute("src", diceImageSrc1);

/* Dice 2 */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var diceImageSrc2 = "./images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", diceImageSrc2);

/* Change the title from "Refresh me" to the result of the game */
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "☝🏻Player 1 Wins!"
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "✌🏼Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!!"
}