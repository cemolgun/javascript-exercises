function calculateAge(person){

    const calendar = new Date();

    if (person.yearOfDeath != undefined){
        return (person.yearOfDeath - person.yearOfBirth);
    }
    return calendar.getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestIndex = 0;

    for (let i = 0; i<people.length; i++){
        if (calculateAge(people[i]) > oldestAge){
            oldestAge = calculateAge(people[i]);
            oldestIndex = i;
        }
    }

    return people[oldestIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
