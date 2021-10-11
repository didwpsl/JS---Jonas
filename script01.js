const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter'; 


//more usual 
const friends = ['Michel', 'Steven', 'Peter'];
console.log(friends);

/*
const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
*/
console.log(friends[0]); //Arrays always start from 0
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends[2]);

const firstName = 'Soyoung';
const soyoung = [firstName, 'Yang', 2021-1993, 'teacher', friends];
console.log(soyoung);
console.log(soyoung.length);

const calcAge = function (birthYear){
    return 2021 - birthYear;
}
const years = [1990, 1967, 2010, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);

console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);