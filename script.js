'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct number 🎉";

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var hs = 0;

const displayMsg = function(msg) {
    document.querySelector('.message').textContent = msg;
}

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.again').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    displayMsg("Start guessing...");
    document.querySelector('.score').textContent = 20;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    //document.querySelector('.number').textContent = secretNumber;
});

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    // when no input 
    if(!guess) {
        displayMsg("No number 🤷‍♀️");
    } 

    else if (guess == secretNumber) {
        displayMsg("Correct number 🎉");
        document.querySelector('.number').textContent = secretNumber;
         
        if (score > hs) {
            hs = score;
            document.querySelector('.highscore').textContent = hs;
        } 

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '60rem'
    } 

    else if (guess != secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber
            //     ? "Too big  ->" : "Too small  <-";
            displayMsg(guess > secretNumber ? "Too big  ->" : "Too small  <-");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMsg("Game Over");
            document.querySelector('.score').textContent = 0;
        }
    }
    
    // //guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Too big  ->";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "Game Over";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    
    // //guess is too low 
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "Too small  <-";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "Game Over";
    //         document.querySelector('.score').textContent = '0';
    //     }
    // }
} );