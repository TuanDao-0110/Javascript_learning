//Write a recursive func,on called fib which accepts a number and returns
//the nth number in the Fibonacci sequence.
//Recall that the Fibonacci sequence is the sequence of whole numbers 1, 2, 2, 3, 5, 8, ...
//which starts 1 and 1, and where every number thereaHer is equal to the sum of the previous two numbers
//https://en.wikipedia.org/wiki/Fibonacci_number

function fib(n) {

    if (n > 1) {
        n--;
        let secondNum = fib(n)
        let firstNum = fib(n - 1)
        return secondNum + firstNum
    }
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }

}

// fib(1 )// 3
// fib(10) // 55



console.log(fib(10))