const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2021 - 1991,
    'teacher'
    ['Micheal', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2021 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose betweeen firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]);


if (jonas[interestedIn]){
    console.log(jonas[interestedIn]);
} else {
    console.log('Wring request! Choose betweeen firstName, lastName, age, job and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

//Little Challenge 
// Write the sentence of below in a dynamic way 
// 'Jonas has 3 friends and his best friend is called Micheal'


const sentence = `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`;
console.log(sentence);