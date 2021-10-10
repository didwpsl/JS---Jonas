/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

Your tasks:

1. Calculate the average score for each team, using the test data below 
*/
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
console.log("Dolphine's average score: " + avgDolphins);
console.log("Koala's average score: " + avgKoalas);


/*
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
*/
if (avgDolphins > avgKoalas) {
    console.log('Winner is Dolphins!')
} else if (avgDolphins < avaKoalas) {
    console.log('Winner is Koalas!')
} else console.log('Draw!');


/*
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 
*/

if (avgDolphins, avgKoalas >= 100){
    if (avgDolphins > avgKoalas) {
        console.log('Winner is Dolphins!')
    } else if (avgDolphins < avgKoalas) {
        console.log('Winner is Koalas!')
    } else console.log('Draw!');
} else console.log('There is no winner for this game');

if (avgDolphins >= 100 && avgDolphins > avgKoalas ){
    console.log('Dolphins is Winner!')
} else if(avgKoalas >= 100 && avgDolphins < avgKoalas ){
    console.log('Dolphins is Winner!')
} else if(avgKoalas, avgDolphins >=100 && avgDolphins === avgKoalas){
    console.log('Draw!')
} else ('There is no winner for this game');

/*
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
*/

if (avgDolphins, avgKoalas >= 100){
    if (avgDolphins > avgKoalas) {
        console.log('Winner is Dolphins!')
    } else if (avgDolphins < avgKoalas) {
        console.log('Winner is Koalas!')
    } else console.log('Draw!');
} else console.log('There is no winner for this game');