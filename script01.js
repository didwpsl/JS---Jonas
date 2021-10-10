'use strict';

function logger() {
    console.log('My name is Jonas');
}
function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(1, 1));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);