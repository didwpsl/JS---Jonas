'use strict';
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 
*/


//Your tasks:
//1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

const calAverage = (a, b, c) => (a+b+c) / 3;

//2. Use the function to calculate the average for both teams

const scoreDolphins1 = calAverage(44, 23, 71);
console.log(scoreDolphins1);
const scoreKoalas1 = calAverage(65, 54, 49);
console.log(scoreKoalas1);
const scoreDolphins2 = calAverage(85, 54, 41);
console.log(scoreDolphins2);
const scoreKoalas2 = calAverage(23, 34, 27);
console.log(scoreKoalas2);
/*
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
*/

function checkWinner(scoreDolphins1, scoreKoalas1){
    if (scoreDolphins1 >= scoreKoalas1 * 2){
    console.log(`Dolphins win ${scoreDolphins1} vs. ${scoreKoalas1}`);
} 
    else if (scoreDolphins1 * 2 <= scoreKoalas1){
    console.log(`Koalas win ${scoreKoalas1} vs. ${scoreDolphins1}`);
} 
    else console.log('There is no winner');
}


// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and

checkWinner(scoreDolphins1, scoreKoalas1);

checkWinner(scoreDolphins2, scoreKoalas2);