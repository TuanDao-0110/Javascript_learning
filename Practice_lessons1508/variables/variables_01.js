"use strict";

//define a variable "count" with value 0
// Define a variable called count with an original value of 0 and then increment it (add 1 to it) on the following line.
let count = 0;
const increment = () => {
  return (count = count + 1);
};

console.log("count on:    " + increment());