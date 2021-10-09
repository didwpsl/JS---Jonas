//Practice Assignment// 
//values and Variables// 
/* Declare variables called 'country' 'continent' and 'population'
and assign their values according to your own country (population in millions)*/

/*let country = 'Korea';
let continent = 'Asia';
let population = '50m';

//Log their values to the console// 

console.log(country);
console.log(continent);
console.log(population);

//Data Types// 
/* 1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet. */

/*let isIsland = false; 
let language

/* 2. Log the types of 'isLsland', 'population', 'country' and 'language'
to the console. */

/*console.log(isIsland);
console.log(language);
console.log(population);
console.log(country);

console.log(`I am from ${country} in ${continent} My country's population is ${population} 
and we speak ${language}`);

//let, const and var//
/* 1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)*/

/*language = 'KOREAN';
console.log(language);

/* 2.Think about which variables should be const variables (which values will never 
    change, and which might change?) Then, change these variables to const */

//A. changeable value = population, non changeable = country, countinent, language, isIsland//

/*const country = "KOREA";
console.log(country);
let population = "50m";
console.log(population);

/* 3.Try to change one of the changed variables now, and observe what happens */

/*population = "40m";
console.log(population);
country = 'AMERICA';
console.log(country);

//Basic Operators// 
/* 1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?*/
let population = '50000000';
const country = 'KOREA';
const continent = 'ASIA';
const language = 'KOREAN';
console.log(population / 2 );


/* 2. Increase the population of your country by 1 and log the result to the console */

console.log(++population);

/* 3.Finland has a population of 6 million. Does your country have more people than
Finland?*/
console.log(population > 60000000);

/* 4.The average population of a country is 33 million people. Does your country
have less people than the average country? */
console.log(population < 33000000);

/* 5.
Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese */ 
const description1 = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description1);