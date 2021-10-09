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

language = 'KOREAN';
console.log(language);

/* 2.Think about which variables should be const variables (which values will never 
    change, and which might change?) Then, change these variables to const */

//A. changeable value = population, non changeable = country, countinent, language, isIsland//

const country = "KOREA";
console.log(country);
let population = "50m";
console.log(population);

/* 3.Try to change one of the changed variables now, and observe what happens */

population = "40m";
console.log(population);
country = 'AMERICA';
console.log(country);