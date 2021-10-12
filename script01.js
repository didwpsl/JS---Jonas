
const jonasArray = [
    'Jonas',
    'Schmedtamann',
    2021 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]
const types= [];

for(let i = 0; i<jonasArray.length; i++){

    types[i] = typeof jonasArray[i];
    // Filling types array 
    //console.log(jonasArray[i], types[i]);
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages =[];

for (let i = 0; i < years.length; i++){
   ages.push(2021 - years[i]);

}
console.log(ages);

console.log('-----------ONLY STRINGS -----------------')
for(let i = 0; i<jonasArray.length; i++){;
    if(typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

