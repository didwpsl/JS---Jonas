/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
*/

/*
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/*
Your tasks:
1. Store Mark's and John's mass and height in variables*/

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

/*
2. Calculate both their BMIs using the formula (you can even implement both
versions)*/

//Data 1 calculated by version 1// 
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


//Data 2 calculated by version 2 // 
let mass2 = massJohn2;
let height2 = heightJohn2;
const BMIJ2 = mass2 / (height2 * height2);
console.log(mass2, height2);
console.log(BMIJ2);

mass2 = massMark2;
height2 = heightMark2;
const BMIM2 = mass2/ (height2 * height2);
console.log(mass2, height2);
console.log(BMIM2);

/*
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.*/

console.log(BMIM > BMIJ);
console.log(BMIM2 > BMIJ2);

