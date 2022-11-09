//Write a func,on called recursiveRange which accepts a number
//and adds up all the numbers from 0 to the number passed to the func,on

function recursiveRange(x) {
    let result = 0;
    while (x) {
        result += x
        x--;
    }
    return result
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55


console.log(recursiveRange(6))