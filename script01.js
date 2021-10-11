const friends = ['Micheal', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

const favNumber = [1, 2, 3, 4, 5];
const examples = favNumber.push(6);
console.log(favNumber);
console.log(examples);

friends.unshift('John', 'Amy');
console.log(friends);

friends.pop();
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

const shiftted = friends.shift();
console.log(shiftted);

console.log(friends.indexOf('Jana'));

console.log(friends.includes('Amy'));
console.log(friends.includes('Micheal'));

friends.push(1);
console.log(friends);
console.log(friends.includes(1));

if (friends.includes('Micheal')){
    console.log('You have a friend called Peter')
}