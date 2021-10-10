const day = 'sudd'; 

switch (day) {
    case 'monday':
        console.log('You have a class today');
        console.log('Also have to do workout');
        break;
    case 'tuesday' :
        console.log('Have to return the book');
        break; 
    case 'wednesday' :
        console.log('Go to the cafe');
        break;
    case 'thursday' :
        console.log('Plan your schedule');
        break;
    case 'friday' :
        console.log('Only 1 day left for weekend');
        break;
    case 'saturday', 'sunday' :
        console.log('Now you can rest :)');
        break;
    default: 
        console.log('Not a valid day');
}

if(day === 'monday'){
    console.log('You have a class today');
    console.log('Also have to do workout');
} else if (day === 'tuesday'){
        console.log('Have to return the book');
} else if (day === 'wednesday'){
    console.log('Go to the cafe');
} else if (day === 'thursday') {
    console.log('Plan your schedule');
} else if (day === 'friday'){
    console.log('Only 1 day left for weekend');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Now you can rest :)')}
 else console.log('Not a valid day');

 /*
 LECTURE: The switch Statement

1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

let language = 'english';

switch (language) {
    case 'chinese', 'mandarine':
    console.log('MOST number of native speakers!');
    break;
    case 'spanish' :
    console.log('2nd place in number of native speakers');
    break;
    case 'english' :
    console.log('3rd place');
    break;
    case 'hindi' :
    console.log('Number 4');
    break;
    case 'arabic' :
    console.log('5th most spoken language');
    break;
    default : 
    console.log('Great language too :D');
}