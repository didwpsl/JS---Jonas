/*
LECTURE: Strings and Template Literals

1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/
/*let population = '50000000';
const country = 'KOREA';
const continent = 'ASIA';
const language = 'KOREAN';

const description1 = `${country} is in ${continent}, and its ${population} people speak ${language}`;

const description = "Korea is in Asia, and its 50millions people speak Korean";
console.log(description);

/*
LECTURE: Taking Decisions: if / else Statements

1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
*/
/*
if (population > 33000000){
    console.log("Korea's population is above average");
} else console.log("Korea's population is 22million below average");

/*
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
/*
population = 13000000;
if (population > 33000000){
    console.log("Korea's population is above average");
} else console.log("Korea's population is 22million below average");

population = 130000000;
if (population > 33000000){
    console.log("Korea's population is above average");
} else console.log("Korea's population is 22million below average");

population = 50000000;

/*LECTURE: Type Conversion and Coercion

1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
*/
//my expectation 4, 617, 23, false, 1143 

/*
2. Execute the operations to check if you were right
*//*
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' +9 -4 -2);

/*
LECTURE: Equality Operators: == vs. ===

1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
*/
/*
const numNeighbours = prompt('How many neighbour countries does your country have?');

/*
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
*/
//if (numNeighbours == 1) {console.log('Only 1 border!');}

/*
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
*/
//else if(numNeighbours > 1) {console.log('More than 1 border');}

/*
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
*/
//else console.log('No borders');
/*
5. Test the code with different values of 'numNeighbours', including 1 and 0.
*/

/*if (numNeighbours == 1) {console.log('Only 1 border!');}
else if(numNeighbours > 1) {console.log('More than 1 border');}
else console.log('No borders');*/

/*
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
*/
/*
if (numNeighbours === 1) {
    console.log('Only 1 border!');
}
    else if(numNeighbours > 1) {
        console.log('More than 1 border');
    }
    else console.log('No borders');
*/
/*
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
*/
/*
if (Number(numNeighbours) === 1) {
    console.log('Only 1 border!');
}
    else if(numNeighbours > 1) {
        console.log('More than 1 border');
    }
    else console.log('No borders');

    /*
 LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
*/

/*
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
*/
/*
let population = 50000000;
const country = 'KOREA';
const continent = 'ASIA';
const language = 'KOREAN';

/*
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
*/
/*
const counSarah = (language === "English" && population < 50000000 && continent !== "ISLAND")

/*
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
*/
/*
if (counSarah == true){
    console.log('You should live in Korea');
} 
else console.log('Korea does not meet your criteria');

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
*/

function describeCountry (country, population, capitalCity){
    return (`${country} has ${population} million people and capital city is ${capitalCity}`)
}

/*
2. Call this function 3 times, with input data for 3 different countries. 
Store the  returned values in 3 different variables, and log them to the console
*/
/*
const Korea = describeCountry('Korea', 50, 'Seoul');
const Japan = describeCountry('Japan', 120, 'Tokyo');
const Australia = describeCountry('Australia', 20, 'Canberra');

console.log(Korea);
console.log(Japan);
console.log(Australia);

/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
*/
/*
const Korea = 50000000;
const Japan = 120000000;
const Australia = 20000000;

function percentageOfWorld1 (population){
    return population / 7900000000 * 100;
}

console.log(percentageOfWorld1(Korea));
console.log(percentageOfWorld1(Japan));
console.log(percentageOfWorld1(Australia));

/*
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
*/



/*
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
*/
/*
const popKorea = percentageOfWorld1(Korea);
const popJapan = percentageOfWorld1(Japan);
const popAustralia = percentageOfWorld1(Australia);

console.log(popKorea);
console.log(popJapan);
console.log(popAustralia);
/*
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
/*
const percentageOfWorld2 = function(population) {
    return population / 7900000000 * 100;
}

console.log(percentageOfWorld2(Korea));
console.log(percentageOfWorld2(Japan));
console.log(percentageOfWorld2(Australia));

/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/
/*
const Korea = 50000000;
const Japan = 120000000;
const Australia = 20000000;


const percentageOfWorld3 = population => population / 7900000000 * 100;

console.log(percentageOfWorld3(Korea));
console.log(percentageOfWorld3(Japan));
console.log(percentageOfWorld3(Australia));

/*
LECTURE: Functions Calling Other Functions

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
*/


/*
function describePopulation (country, population){
    return (`${country} has ${population} people, which is about ${percentage} of the world`)
}

/*
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
*/
/*
function percentageOfWorld1 (population){
    return population / 7900000000; 
}

//3. Call 'describePopulation' with data for 3 countries of your choice

function describePopulation (country, population){
    const percentageK = percentageOfWorld1(population);

    return (`${country} has ${population} people, which is about ${percentageK} percent of the world`)
}

console.log(describePopulation('Korea', 50000000));
console.log(describePopulation('Japan', 1200000000));
console.log(describePopulation('Australia', 20000000));
/*
LECTURE: Introduction to Arrays

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
*//*
const popKorea = 50000000;
const popJapan = 12000000000;
const popAustralia = 20000000;
const popPhilippines = 100000000;
const capKorea = 'Seoul';
const capJapan = 'Tokyo';
const capAustralia = 'Canberra';
const lanKorea = 'Korean';
const lanJapan = 'Japanese';
const lanAustralia = 'English';

const populations = [popKorea, popJapan, popPhilippines, popAustralia];


//2. Log to the console whether the array has 4 elements or not (true or false)

console.log(populations.length > 3);

/*
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/
/*
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages);

/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
*/
//const neighbours = ['Japan', 'China', 'Vietnam', 'Thailand']

/*
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
*/
/*neighbours.push('Utopia');
console.log(neighbours);

/*
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
*/
/*neighbours.pop();
console.log(neighbours);

/*
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
*/
/*if (neighbours.includes('Germany')){
    
} else console.log('Probably not a central European country :D');

/*
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/
/*
console.log(neighbours.indexOf('China'));
neighbours[1] = 'Republic of China';
console.log(neighbours);
*/
/*
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/ 

const myCountry = {
    country = 'Korea',
    capital = 'Seoul',
    language = 'Korean',
    population = '50000000',
    neighbours = ['Japan', 'China', 'Vietnam', 'Thailand']
}
