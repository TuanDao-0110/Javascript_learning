//Write a func,on called stringifyNumbers which takes in an object and finds all of the values
//which are numbers and converts them to strings.
//Recursion would be a great way to solve this task.

function stringifyNumbers(obj) {
  for (const i in obj) {
    if (typeof obj[i] !== 'object' && typeof obj[i] === 'number') {
      obj[i] = obj[i].toString()
    }
    if (typeof obj[i] === 'object') {
      stringifyNumbers(obj[i])
    }
  }
  return obj
}


let test = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}


stringifyNumbers(test)
