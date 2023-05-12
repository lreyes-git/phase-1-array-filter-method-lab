// Code your solution here
const findMatching = function(collection, str) {
    const matchingDrivers = [];
    for (const user of collection) {
        if (user.toLowerCase() === str.toLowerCase())
        matchingDrivers.push(user);
    }
    return matchingDrivers;
}

const fuzzyMatch = function(collection, str) {
    const fuzzyList = [];
    for (const user of collection) {
        if (user.charAt(0) === str.charAt(0))
        fuzzyList.push(user);
    }
    return fuzzyList;
}

const matchName = function(collection, str) {
    const newNames = [];
    for (const user of collection) {
        if (user.name === str)
        newNames.push(user);
    }
    return newNames;
}