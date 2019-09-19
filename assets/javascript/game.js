

// // Create initial variables for game
var win = 0;
var loss = 0;
var counter = 0;
var crystalValue1 = 0;
var crystalValue2 = 0;
var crystalValue3 = 0;
var crystalValue4 = 0;
var randomNumber = 0;
var score = 0;

// // Generate target number and link to randomNumber, set as function to call

function targetNumberGen(){
var randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log("target number is: " + randomNumber);
$("#targetNumber").text(randomNumber);
}

// initial random number function
targetNumberGen();

// generate random crystal values of 1 - 12
function crystalValueGen(){
    var crystalValue1 = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalValue2 = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalValue3 = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalValue4 = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("crystal 1 value is: " + crystalValue1);
    console.log("crystal 2 value is: " + crystalValue2);
    console.log("crystal 3 value is: " + crystalValue3);
    console.log("crystal 4 value is: " + crystalValue4);
}

// initial crystal value function
crystalValueGen();

