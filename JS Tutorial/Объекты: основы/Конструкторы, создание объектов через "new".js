// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
//  Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
    this.read = function () {
        this.operOne = +prompt('First value')
        this.operTwo = +prompt('Second value')
    },
    this.sum = function () {
        return this.operOne + this.operTwo
    },
    this.mul = function () {
        return this.operOne * this.operTwo
    }
}

// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
//
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
//
// Ниже вы можете посмотреть работу кода:
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function () {
        let income = +prompt('Value?')
        this.value += income
    }
}
let str = "Привет";

str.test = 5;

alert(str.test);