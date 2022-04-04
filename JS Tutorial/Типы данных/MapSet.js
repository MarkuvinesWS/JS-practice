// Допустим, у нас есть массив arr.
// Cоздайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
    return  Array.from( new Set(arr))
}

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.


function aclean(arr) {
    let map = new Map();
    arr.forEach(item => {
       let sort = item.toLowerCase().split('').sort().join('')
        // newArr = [...newArr, item.split('').sort().join('') ]
        map.set(sort, item);
    })
    return Array.from(map.values())
}