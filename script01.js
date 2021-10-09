const firstName = 'Soyoung';
const job = 'Programmer';
const birthYear = 1993;
const year = 2021;

const soyoung = "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYear) 
+ ' ' + 'years old' + ' ' + job + ' ' + '!';
console.log(soyoung);

const newSoyoung = `I'm ${firstName}, a ${year-birthYear} years old ${job} !`;
console.log(newSoyoung); 

console.log(`Hello My name is \n ${firstName}`);

console.log(`Hello My name is \t ${firstName}`);