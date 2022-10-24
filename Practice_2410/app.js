// check validAnagram 

const arr1 = ['c', 'b', 'a', 'a'];
const arr2 = ['a', 'b', 'c', 'a'];


// 1. create compare 2 arr function  
function areEqual(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every(element => {
            if (array2.includes(element)) {
                return true;
            }

            return false;
        });
    }

    return false;
}

console.log(areEqual(arr1, arr2))


function createArr(str) {
    return str.toLowerCase().split('')
}



function check(str1, str2) {
    let arr1 = createArr(str1)
    let arr2 = createArr(str2)
    return areEqual(arr1, arr2)
}


console.log(check('Get', 'Teg')); // 👉️ true
