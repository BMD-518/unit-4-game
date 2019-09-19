

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
randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log("target number is: " + randomNumber);
$("#targetNumber").text(randomNumber);
};

// initial random number function
targetNumberGen();

// generate random crystal values of 1 - 12
function crystalValueGen(){
    crystalValue1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystalValue2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystalValue3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystalValue4 = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("crystal 1 value is: " + crystalValue1);
    console.log("crystal 2 value is: " + crystalValue2);
    console.log("crystal 3 value is: " + crystalValue3);
    console.log("crystal 4 value is: " + crystalValue4);
};

// initial crystal value function
crystalValueGen();

// add selected crystal values to score when clicked
$(document).ready(function(){
$("#image1").on("click", function (){
    score += crystalValue1;
    console.log("current score: " + score);
    $("#yourScore").text(score);
    winLoss();
});
$("#image2").on("click", function (){
    score += crystalValue2;
    console.log("current score: " + score);
    $("#yourScore").text(score);
    winLoss();
});
$("#image3").on("click", function (){
    score += crystalValue3;
    console.log("current score: " + score);
    $("#yourScore").text(score);
    winLoss();
});
$("#image4").on("click", function (){
    score += crystalValue4;
    console.log("current score: " + score);
    $("#yourScore").text(score);
    winLoss();
});
});
// Created function for detecting wins and losses
function winLoss(){
    if (score === randomNumber) {
        win ++;
        console.log("you won! Total wins: " + win);
        $("#wins").text(win);
        targetNumberGen();
        crystalValueGen();
        score = 0;
    }

    if (score >= randomNumber) {
        loss ++;
        console.log("you lost! Total losses: " + loss);
        $("#losses").text(loss);
        targetNumberGen();
        crystalValueGen();
        score = 0;
    }
}