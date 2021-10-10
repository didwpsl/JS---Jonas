/*
A: age is greator or equal 20 
B: age is less than 30 
*/
/*
const age = 16;
const A = age >= 20;
const B = age < 30;

console.log( A && B);
console.log( A || B);
*/

const hasDriversLicense = true;  //A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*if(hasDriversLicense && hasGoodVision){
    console.log('Sarah is able to drive');
}else {
    console.log('Someone else should drive');
}*/

const isTired = false; // C 
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive');
}else {
    console.log('Someone else should drive');
}
