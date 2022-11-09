'use strict';

/**

For each of the exercises below only 11 simple excercises, assume you are starting with the following people array.

let people = ["Sergei", "Mariia", "Boris", "Abel"];

1. Using a loop, iterate through this array and console.log all of the people (also rewrite it using arrow function).
2. Write the command to remove "Sergei" from the array.
3. Write the command to remove "Abel" from the array.
4. Write the command to add "Mahalete" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Write the command to make a copy of the array using slice. The copy should NOT include "Sergei" or "Mariia".
7. Write the command that gives the indexOf where "Mariia" is located.
8. Write the command that gives the indexOf where "Foo" is located (this should return -1).
9. Redefine the people variable with the value you started with. Using the splice command, remove "Boris" from the array and add "Rakhi" and "Yulia". Your array should look like this when you are done ["Sergei", "Mariia", "Rakhi", "Yulia", "Abel"].
10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

/**
 */

/**
 * @param {people[]} strings
 */
const showTheUser = (people) => {

    return people.forEach(item => console.log(item))
}

const removeSergei = (people) => {

    let newPeople = people.filter(item => item != 'Sergei')
    console.log(newPeople)

    return newPeople
}


const removeAbel = (people) => {

    let newPeople = people.filter(item => item != 'Abel')
    console.log(newPeople)

    return newPeople
}

const addMahalete = (people) => {
    let newPeople = people
    newPeople.push('Mahalete')
    console.log(newPeople)
    return newPeople
}

const addMyName = (people) => {
    let newPeople = people
    newPeople.push('Tuan')
    console.log(newPeople)
    return newPeople
}
const useSlice = (people) => {
    return people.slice(2)
}
const findLocation = (people) => {
    return people.findIndex(item => item == 'Mariia')
}
const findFoo = (people) => {
    return people.findIndex(item => item == 'Foo')
}
const redefine = (people) => {

    people.splice(2, 0, 'Rakhi')
    people.splice(3, 0, 'Yulia')
    return people.filter(item => item != 'Boris').filter(item => item != 'Mahalete').filter(item => item != 'Tuan')
}
const withBob = (people)=> { 
    
}
const people = ["Sergei", "Mariia", "Boris", "Abel"];
// 1.
showTheUser(people)
// 2.
removeSergei(people)
// 3. 
removeAbel(people)
// 4.
addMahalete(people)
// 5.
addMyName(people)
// 6. 
console.log(useSlice(people))
// 7.
console.log(findLocation(people))
// 8.
console.log(findFoo(people))
// 9.
console.log(redefine(people))
