/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
*/


/*
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
*/

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}


/*
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
*/

const calcBMI = function(mass, height){  
    return mass / height ** 2;
}
const johnBMI = calcBMI(john.mass, john.height)
const markBMI = calcBMI(mark.mass, mark.height)

console.log(johnBMI);
console.log(markBMI);


/*
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall
*/

const higherBMI = johnBMI > markBMI ? `John\'s BMI ${johnBMI} is higher than Mark's ${markBMI}` : `Mark's BMI ${markBMI} is higher than John's ${johnBMI}` ;
console.log(higherBMI);