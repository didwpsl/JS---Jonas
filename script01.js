const calAge = function (birthYear){
    return 2021 - birthYear;
}

const yearUntilRetirement = function (birthYear, firstName) {
    const age = calAge(birthYear);
    const retirement = 65 - age; 

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1; 
    }

}

console.log(yearUntilRetirement(1991, 'Jonas'));