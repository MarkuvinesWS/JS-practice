// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
//
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
//
// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.

function makeCounter() {
    let count = 0;

    return function counter  ()  {
        counter.decrease = function () {
            return --count
        }
        counter.set = function (val) {
            return count = val;
        }
        return  count++
    }

}

// Напишите функцию sum, которая бы работала следующим образом:

//Не сам придумал
function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}