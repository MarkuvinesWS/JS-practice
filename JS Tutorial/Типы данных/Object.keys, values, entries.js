// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650

function sumSalaries(salaries) {
    let sum = 0;
    for ( let value of Object.values(salaries)) {
        sum +=value
    }
    return sum
}

// Напишите функцию count(obj), которая возвращает количество свойств объекта:

function count(obj) {
    let arr = Object.entries(obj);
    return arr.length
}
