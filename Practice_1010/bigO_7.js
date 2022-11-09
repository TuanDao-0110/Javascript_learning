function onlyElementsAtEvenIndex(array) {
  let newArray = Array(Math.ceil(array.length / 2));
  for (let i = 0; i < array.length; i++)
  {
    if (i % 2 === 0)
    {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
// O(1+ n(1 +1)) ===> O(n)