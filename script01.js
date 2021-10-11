function cutFruitPieces(fruit){
    return fruit *4 ; //Hoisting 
}

function fruitProcessor(apples, orange){
    const applePieces = cutFruitPieces(apples); 
    const orangePieces = cutFruitPieces(orange);

    const juice = `Juice with ${applePieces} apples 
    and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
