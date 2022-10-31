//Write a func,on called reverse which accepts a string and returns
//a new string in reverse

function reverse(str) {
    let arr = str.split('')
    for (n = 0; n < arr.length; n++) {
        let temp = arr[str.length - 1 - n]
        arr[n] = temp
    }

    return arr.join('')

}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


console.log(reverse('awesome'))
