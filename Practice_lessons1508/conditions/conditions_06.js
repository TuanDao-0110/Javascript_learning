"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case 90 > score && score >= 80:
      grade = "B";
      break;
    case 80 > score && score >= 70:
      grade = "C";
      break;
    case 70 > score && score >= 50:
      grade = "D";
      break;
    case 50 > score:
      grade = "F";
      break;
    default:
      break;
  }
  return grade;
}

console.log("You got a " + assignGrade(85));
console.log("You got a " + assignGrade(65));
