const findTheOldest = (people)=>{    
    const sort = people.sort((lastOne, nextOne)=>{
        if (!lastOne.hasOwnProperty('yearOfDeath')){
            lastOne.yearOfDeath = 2022;
        }
        if (!nextOne.hasOwnProperty('yearOfDeath')){
            nextOne.yearOfDeath = 2022;
        }
        
        const lastYear = lastOne.yearOfDeath - lastOne.yearOfBirth;
        const nextYear = nextOne.yearOfDeath - nextOne.yearOfBirth;
       
        return lastYear>nextYear?-1:1;
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
