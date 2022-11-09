'use strict';

/**
Task 1;
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
What is the length of the array?
Write a function called myAlphabetLength which console.logs the length of the array
Within the function also use an if-conditional statement that checks if the number of items within the array are less than 5
**/
const myAlphabetLength = (arr) => {
   (arr.length > 5) ? console.log('arrary length is : ' + arr.length) : console.log('array length smaller than 5')
}
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
myAlphabetLength(myAlphabet)
/**
Task 2;
Declare a arrow function checkFunc that takes a string and a boolean as parameters
Call the function using 2 arguments
**/
let checkFunc = (string, boolean) => {

   console.log('1 parameter is :  ' + typeof (string) + ' and 2 parameter :  ' + typeof (boolean))

}
checkFunc('more', true)
/**
Task 3;
Declare and initialize an array called Planets with 5 string values
console.log each item in the array
Also console.log the index in each iteration
**/
const planet = (stringArrr) => {
   stringArrr.forEach(item => console.log(item))


}
let testArr = ['1,', '2']
planet(testArr)
/**
Task 4:
Declare and initialize an array called wowDatatypes
The array must have 5 different data types (NOT objects)
Iterate over the array and console.log each item in the array + it’s index and data type in the array
**/
const wowDatatypes = (arr, index) => {
   arr.forEach(item => console.log('item ' + index + ' with type is : ' + typeof (item)))
}


/**
Task 5:
console.log each item in this array WITHOUT using a for loop
   let myArr = [ 1, 2, 'One', true];
**/



/**
Task 6:
Loop over the 2 arrays and if there are any common courses, if so console.log them
**/

let student2Courses = ['Geography', 'Spanish', 'JSProgramming'];
let student1Courses = ['Math', 'English', 'JSProgramming'];


const compare = (arr1, arr2) => {
   let commanValue = []
   arr1.forEach(item1 => {
      arr2.forEach(item2 => {
         (item1 == item2) && (commanValue.push(item1))
      })
   })
   console.log(commanValue)
   return commanValue
}

// compare(student1Courses, student2Courses)
/*

Task 7:
For each item in this array console.log the letters in each item
**/
let furniture = ['Table', 'Chairs', 'Couch'];
const eachItemLetters = (arr) => {
   return arr.forEach((item, index) => {
      for (let i = 0; i < item.length; i++) {
         console.log('item ' + index + ' ' + item[i])
      }
   })
}
eachItemLetters(furniture)