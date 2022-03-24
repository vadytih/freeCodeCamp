// Вернуть ранний шаблон для функций
// Когда returnоператор достигнут, выполнение текущей функции останавливается, и управление возвращается в место вызова.
//
//     Пример
//
// function myFun() {
//     console.log("Hello");
//     return "World";
//     console.log("byebye")
// }
// myFun();
// Приведенное выше отобразит строку Helloв консоли и вернет строку World. Строка byebyeникогда не будет отображаться в консоли, потому что функция завершает работу на returnоператоре.
//
//     Измените функцию abTestтак, чтобы, если aили bменьше 0, функция немедленно завершалась со значением undefined.
//
//     Подсказка
// Помните, что undefinedэто ключевое слово , а не строка.
//
// abTest(2, 2)должен вернуть число
//
// abTest(2, 2)должен вернуться8
//
// abTest(-2, 2)должен вернутьсяundefined
//
// abTest(2, -2)должен вернутьсяundefined
//
// abTest(2, 8)должен вернуться18
//
// abTest(3, 3)должен вернуться12
//
// abTest(0, 0)должен вернуться0

// ===
// // Setup
// function abTest(a, b) {
//     // Only change code below this line
//
//
//
//     // Only change code above this line
//
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }
//
// abTest(2,2);
// ===

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);