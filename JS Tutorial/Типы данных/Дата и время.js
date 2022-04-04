// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

// let date = new Date('2012-02-20T13:12');
// let d = new Date(2012, 1, 20, 3, 12);
// alert(date);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

function getWeekDay(date) {
    switch (date.getDay()) {
        case 0 : return 'ВС'
        case 1 : return 'ПН'
        case 2 : return 'ВТ'
        case 3 : return 'СР'
        case 4 : return 'ЧТ'
        case 5 : return 'ПТ'
        case 6 : return 'СБ'
    }
}

// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
    let daysNum = [7 ,1, 2, 3, 4, 5, 6]
    return daysNum[date.getDay()]
}

// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

function getDateAgo(date, days) {
    let millisDay = days*24*3600*1000
    let newDate = date - millisDay;
    let targetDate = new Date(newDate);
    return targetDate.getDate()
}

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
//
// Параметры:
//
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    date.setDate(date.getDate() - 1)
    return date.getDate()
}

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
//
// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    let date = new Date(Date.now())
    let secondsEnd = date.getHours()*3600 + date.getMinutes()*60+ date.getSeconds();
    return secondsEnd;
}

// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//     Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToTomorrow() {
    let dateTomorrow = new Date(Date.now());
    dateTomorrow.setDate(dateTomorrow.getDate() + 1);
    dateTomorrow.setHours(0,0,0,0)
    return Math.round((dateTomorrow - (new Date(Date.now())))/ 1000)
}

// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//     Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//     В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//     В противном случае, если меньше часа, вывести "m мин. назад".
//     В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
    dateNow = new Date(Date.now());
    if (dateNow - date < 1000) {
        return "прямо сейчас"
    } else if (dateNow - date < 60000) {
        return `${Math.round((dateNow - date) / 1000)} сек. назад`
    } else if (dateNow - date < 3600000) {
        return `${Math.round((dateNow - date) / 60000)} мин. назад`
    } else {
        return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${(date.getMonth() + 1 < 10) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear() - 2000} ${date.getHours()}:${date.getMinutes()}`
    }
}