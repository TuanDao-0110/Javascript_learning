//  sum function : a vs b
const sun = (a, b) => {
  return a + b;
};
// const multiply function

const multiply = (number, multiplyNumber) => {
  return number * multiplyNumber;
};

//  function getCharCount the number of characters in the str

const getCharCount = (str) => {
  return str.length;
};

// function shoutMyName in upper case

const shoutMyName = (name) => {
  return name.toUpperCase();
};

//  function lowerName which return a name to lower case

const lowerName = (name) => {
  return name.toLowerCase();
};

// getFirstCharacter from the input string:

const getFirstCharacter = (str) => {
  return str[0];
};

// getLastCharacter from the input string:
const getLastCharacter = (str) => {
  return str[str.length - 1];
};

// skipFirstCharacter that it return the rest of the str:
const skipFirstCharacter = (str) => {
  return str.substring(1, str.length);
};

// concatInitials such that it return the firsNameintial followed by the lastNameInitial

// sayHello such that it interpolates the variable name into a string "Hello Name"
const sayHello = (name) => {
  return `Hello ${name}`;
};
//  getFullName such that it return full name of the person using interpolation
// capitalize method that return the name parameter to capitalize

const capitalize = (name) => {
  return getFirstCharacter(name).toUpperCase() + skipFirstCharacter(name);
};

// convertNumberToString convert number to string
const convertNumberToString = (number) => {
  return number.toString();
};

// complete the function getNextAge that return your next year age
const getNextAge = (yearBorn) => {
  return yearBorn + 1;
};
