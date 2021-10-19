'use strict';
/*
console.log(document.querySelector('.message').
textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent= 13;
document.querySelector('.score').textContent = 11; 

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;  
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    

        if (guess > secretNumber){
            if (score > 1){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } 
        else document.querySelector('.message').textContent = 'YOU LOST!'} 

        else if (guess < secretNumber){
            if (score > 1){
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        } 
        else document.querySelector('.message').textContent = 'YOU LOST!'} 
        else if (guess === secretNumber){
            if (score > 1){
            document.querySelector('.message').textContent = 'Correct!!';
            score++;
            document.querySelector('.score').textContent = score;}
            else document.querySelector('.message').textContent = 'YOU LOST!';}
        }

);