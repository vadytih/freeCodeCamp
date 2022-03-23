// Сравнение с оператором неравенства
// Оператор неравенства ( !=) противоположен оператору равенства. Это означает не равно и возвращает falseто, что вернулось бы к равенству, trueи наоборот . Как и оператор равенства, оператор неравенства преобразует типы данных значений при сравнении.
//
//     Примеры
//
// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false
// Добавьте оператор неравенства !=в ifоператор, чтобы функция возвращала строку , Not Equalкогда valона не эквивалентна 99.
//
// testNotEqual(99)должен вернуть строкуEqual
//
// testNotEqual("99")должен вернуть строкуEqual
//
// testNotEqual(12)должен вернуть строкуNot Equal
//
// testNotEqual("12")должен вернуть строкуNot Equal
//
// testNotEqual("bob")должен вернуть строкуNot Equal
//
// Вы должны использовать !=оператор

// ===
// // Setup
// function testNotEqual(val) {
//     if (val) { // Change this line
//         return "Not Equal";
//     }
//     return "Equal";
// }
//
// testNotEqual(10);
// ===

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);