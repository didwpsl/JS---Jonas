//Data1//
const massJohn1 = 92;
const heightJohn1 = 195; 
const massMark1 = 78;
const heightMark1 = 169;
//Data2//
const massJohn2 = 85;
const heightJohn2 = 176;
const massMark2 = 95;
const heightMark2 = 188;

let mass = massJohn1;
let height = heightJohn1;
const BMIJ= mass / height ** 2
console.log(mass, height);
console.log(BMIJ);

mass = massMark1;
height = heightMark1;
const BMIM = mass / height ** 2
console.log(mass, height);
console.log(BMIM);

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
*/

/*
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
*/
if (BMIJ > BMIM){
    console.log(`John's BMI is higher than Mark's!`);
} else {
    console.log(`Mark's BMI is higher than John's!`);
}

/*
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
 */
if (BMIJ > BMIM) {
    console.log(`John's BMI(${BMIJ}) is higher than Mark's(${BMIM}!`);
}   else{
    console.log(`Mark's BMI(${BMIM}) is higher than John's(${BMIJ}!`);
}