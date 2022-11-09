//Write a func,on called productOfArray which takes in array
//of numbers and returns the product of them all .

// HINT: array method e.g. slice

function productOfArray(arr) {
    let result = 1
    for (i of arr) {
        result = result * i
    }
    return result
}


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60


console.log(productOfArray([1, 2, 3])) // 6
console.log(productOfArray([1, 2, 3, 10]))// 60