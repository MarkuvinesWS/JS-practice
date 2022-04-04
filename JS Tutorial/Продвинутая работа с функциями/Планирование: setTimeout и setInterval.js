// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//     Сделайте два варианта решения.
//
//     Используя setInterval.
//     Используя рекурсивный setTimeout.

function printNumbers(from, to) {
    let count = from
    let timerId = setInterval(() => {
        console.log(count);
        count ++;
        if (count > to) {
            clearTimeout(timerId)
        }}, 1000)
}

function printNumbers(from, to) {
    let count = from;
 let timerId = setTimeout(function tick ()  {
        console.log(count);

        if (count < to) {
            count++;
            timerId = setTimeout(tick, 1000)
        }
    }, 1000)
}
