// Возврат логических значений из функций
// Вы можете вспомнить из раздела Сравнение с оператором равенства , что все операторы сравнения возвращают логическое значение trueили falseзначение.
//
//     Иногда люди используют if/elseоператор для сравнения, например:
//
//     function isEqual(a, b) {
//         if (a === b) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// Но есть лучший способ сделать это. Так как ===возвращает trueили false, мы можем вернуть результат сравнения:
//
//     function isEqual(a, b) {
//         return a === b;
//     }
// Исправьте функцию isLess, чтобы удалить if/elseоператоры.
//
//     isLess(10, 15)должен вернутьсяtrue
//
// isLess(15, 10)должен вернутьсяfalse
//
// Вы не должны использовать операторы any ifилиelse

// ===
// function isLess(a, b) {
//     // Only change code below this line
//     if (a < b) {
//         return true;
//     } else {
//         return false;
//     }
//     // Only change code above this line
// }
//
// isLess(10, 15);
// ===

function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);