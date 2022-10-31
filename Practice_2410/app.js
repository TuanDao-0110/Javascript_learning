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

function createArr(str) {
    return str.toLowerCase().split('')
}

function createSortString(str) {
    return str.toLowerCase().split('').sort().join('')
}

function check(str1, str2) {
    let arr1 = createArr(str1)
    let arr2 = createArr(str2)
    // we can do with 2 type of job
    return createSortString(str1) === createSortString(str2)
    // or we do with arr
    // return areEqual(arr1, arr2)
}

console.log(check('Get', 'Teg')); // 👉️ true
