const jonas = [
    'Jonas',
    'Schmedtamann',
    2037 - 1991,
    'Teacher',
    ['Micheal', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]);
} 

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`--------------Starting exercise${exercise}`)

    for (let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep}`)
    }
}
