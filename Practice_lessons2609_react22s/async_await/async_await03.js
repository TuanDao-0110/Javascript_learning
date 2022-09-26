'use strict';

/*
Rewrite/refactor the canVote function as an async arrow function.
*/

/**
 * @param {number} age
 */
const canVote = async age => {
    const result = await new Promise(resolve => {
        resolve(age >= 18);
    });
    return result
}

// Sample usage - do not modify
canVote(20).then(result => {
    console.log(result); // true
});
canVote(15).then(result => {
    console.log(result); // false
});
