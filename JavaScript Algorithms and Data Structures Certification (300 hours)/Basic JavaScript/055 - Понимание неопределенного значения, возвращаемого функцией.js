// Понимание неопределенного значения, возвращаемого функцией
// Функция может включать returnоператор, но это не обязательно. В случае, если у функции нет returnинструкции, при ее вызове функция обрабатывает внутренний код, но возвращаемое значение равно undefined.
//
//     Пример
//
// let sum = 0;
//
// function addSum(num) {
//     sum = sum + num;
// }
//
// addSum(3);
// addSumэто функция без returnоператора. Функция изменит глобальную sumпеременную, но возвращаемое значение функции равно undefined.
//
//     Создайте функцию addFiveбез каких-либо аргументов. Эта функция добавляет 5 к sumпеременной, но возвращает значение undefined.
//
//     addFiveдолжна быть функция.
//
//     После запуска обеих функций значение sumдолжно быть равно 8.
//
// Возвращаемое значение addFiveдолжно быть undefined.
//
//     Внутри addFiveфункции вы должны добавить 5к sumпеременной.

// ===
// // Setup
// let sum = 0;
//
// function addThree() {
//     sum = sum + 3;
// }
//
// // Only change code below this line
//
//
// // Only change code above this line
//
// addThree();
// addFive();
// ===

// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line
function addFive(a) {
    sum += 5;
}

// Only change code above this line

addThree();
addFive();