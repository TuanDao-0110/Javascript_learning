/**
Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
Note that the age is provided by the user in a text box (which you can try in the browser tab).
However, when the text box is empty, the function returns NaN. We need to fix that and make it show 0 instead of NaN.

Tests:
Implements getNextAge()
Handles empty text box

 * @param {string} age
 */
function getNextAge(age) {
  return age ? age + 1 : 0;
}
console.log(`result your next year age is: ${getNextAge()}`);