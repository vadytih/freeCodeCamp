// Сравнение с оператором строгого неравенства
// Оператор строгого неравенства ( !==) является логической противоположностью оператора строгого равенства. Это означает «Строго не равно» и возвращает результат falseтам, где возвращалось бы строгое равенство, trueи наоборот . Оператор строгого неравенства не будет преобразовывать типы данных.
//
//     Примеры
//
// 3 !==  3  // false
// 3 !== '3' // true
// 4 !==  3  // true
// Добавьте в выражение оператор строгого неравенства, ifчтобы функция возвращала строку , Not Equalесли valона не строго равна17
//
// testStrictNotEqual(17)должен вернуть строкуEqual
//
// testStrictNotEqual("17")должен вернуть строкуNot Equal
//
// testStrictNotEqual(12)должен вернуть строкуNot Equal
//
// testStrictNotEqual("bob")должен вернуть строкуNot Equal
//
// Вы должны использовать !==оператор

// ===
// // Setup
// function testStrictNotEqual(val) {
//     if (val) { // Change this line
//         return "Not Equal";
//     }
//     return "Equal";
// }
//
// testStrictNotEqual(10);
// ===

// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);