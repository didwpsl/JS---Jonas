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
*/
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
let population = 50000000;
const country = 'KOREA';
const continent = 'ASIA';
const language = 'KOREAN';

/*
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
*/
const counSarah = (language === "English" && population < 50000000 && continent !== "ISLAND")

/*
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
*/

if (counSarah == true){
    console.log('You should live in Korea');
} 
else console.log('Korea does not meet your criteria');

/*
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/

