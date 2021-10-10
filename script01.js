'use strict'; 

const calcAge3 = birthYear => 2021 - birthYear;
console.log(calcAge3(1993));

const yearsUntilRetirement = 
    (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1993, 'SOYOUNG'));
console.log(yearsUntilRetirement(1990, 'EZRA'));

