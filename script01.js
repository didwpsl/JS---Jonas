
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,


    calcAge : function (){
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary : function (){
        return `${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and he has a driver's license"`
    }
    }

    /*
    calcAge: function(birthYear){
        return 2021 - birthYear;
    }
};

    calcAge: function(){
        console.log(this);
        return 2021 - this.birthYear;*/

console.log(jonas.calcAge());
console.log(jonas.age);


//console.log(jonas.calcAge(1993))

//console.log(jonas['calcAge'](1993))

//Challenge 
//"Jonas is a 46-year old teacher and he has a driver's license"


if (hasDriversLicense =true) {
    console.log(`"${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and he has a driver's license"`);
}else console.log(`${jonas.firstName} cannot drive`);



if (hasDriversLicense = true){
    console.log(jonas.getSummary())
} else console.log(`${jonas.firstName} cannot drive`);

console.log(jonas.getSummary());

