// Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.
//
//     Каждый вызов должен сохраняться как массив аргументов.
//
//     Например:
//
// function work(a, b) {
//     alert( a + b ); // произвольная функция или метод
// }
//
// work = spy(work);
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }
// P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.

//Не сам придумал
function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }

    wrapper.calls = [];

    return wrapper;
}

// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
//
// function f(x) {
//     alert(x);
// }
//
// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);
//
// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
//
// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

function delay(func, ms) {
    return function wrapper (args) {
        setTimeout(func.bind(this,args), ms);
    }
}

function f(x) {
    alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 5000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test1"); // показывает "test" после 5000 мс