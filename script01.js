'use strict';

function calcAge1 (birthYeah){
    return 2021 - birthYeah; 
}
const age1 = calcAge1(1993);
console.log(age1);

const calcage2 = function (birthYeah){
    return 2021 - birthYeah;
}

const age2= calcage2(1993);
console.log(age2);