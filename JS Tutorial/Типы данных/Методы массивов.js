// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
   let arr = str.split('');
   while(arr.indexOf('-') !== -1) {
       arr[arr.indexOf('-') + 1] = arr[arr.indexOf('-') + 1].toUpperCase();
       arr.splice(arr.indexOf('-'), 1);
   }
   return  arr.join('')
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.

function filterRange( arr, a ,b ) {
    let result =[];
    arr.forEach((item) => {
        if (item >= a && item <=b) {
            result = [...result, item]
        }
    })
    return result;
}

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if (item < a || item > b) {
            arr.splice(index, 1)
        }
    })
}

// Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
} )

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let newArr = [...arr];
    newArr.sort()
    return newArr
}

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)
// и возвращает результат. Метод должен понимать плюс + и минус -.

// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

function Calculator() {
    this.operations = {
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
    }

    this.calculate = function (str) {
        let arr = str.split(' ');
        return this.operations[arr[1]](+arr[0], +arr[2])
    }
    this.addMethod = function (oper, func) {
        this.operations = {...this.operations, [oper]: func}
    }
}

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];

let names = users.map((item) => item.name)


// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];

let usersMapped = users.map((item) => ({fullName: `${item.name} ${item.surname}`, id: item.id}))


    // alert( usersMapped[0].id ) // 1
    // alert( usersMapped[0].fullName ) // Вася Пупкин

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
//
// sortByAge(arr);
//
// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

function sortByAge (users) {
    users.sort((a,b) => {
        if (a.age > b.age) return 1
        if (a.age == b.age) return 0
        if (a.age < b.age) return -1
    })
}

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
// let arr = [1, 2, 3];
//
// shuffle(arr);
// arr = [3, 2, 1]
//
// shuffle(arr);
// // arr = [2, 1, 3]
//
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Тасование Фишера — Йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.


function getAverageAge(users) {
    let sum = 0;
    users.forEach(item => {
        sum += item.age;
    })
    return sum / users.length
}

// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) {
    let uniq = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        console.log((arr[i]))
        if (uniq.includes(arr[i])) {
            continue
        } else {
            uniq = [...uniq,arr[i]]
        }
   }
    return uniq
}
