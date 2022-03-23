// Сравнение с оператором меньше или равно
// Оператор меньше или равно ( <=) сравнивает значения двух чисел. Если число слева меньше или равно числу справа, возвращается true. Если число слева больше числа справа, возвращается false. Как и оператор равенства, оператор меньше или равно преобразует типы данных.
//
// Примеры
//
// 4   <= 5 // true
// '7' <= 7 // true
// 5   <= 5 // true
// 3   <= 2 // false
// '8' <= 4 // false
// Добавьте оператор меньше или равно к указанным строкам, чтобы операторы return имели смысл.
//
// testLessOrEqual(0)должен вернуть строкуSmaller Than or Equal to 12
//
// testLessOrEqual(11)должен вернуть строкуSmaller Than or Equal to 12
//
// testLessOrEqual(12)должен вернуть строкуSmaller Than or Equal to 12
//
// testLessOrEqual(23)должен вернуть строкуSmaller Than or Equal to 24
//
// testLessOrEqual(24)должен вернуть строкуSmaller Than or Equal to 24
//
// testLessOrEqual(25)должен вернуть строкуMore Than 24
//
// testLessOrEqual(55)должен вернуть строкуMore Than 24
//
// Вы должны использовать <=оператор как минимум дважды

// ===
// function testLessOrEqual(val) {
//     if (val) {  // Change this line
//         return "Smaller Than or Equal to 12";
//     }
//
//     if (val) {  // Change this line
//         return "Smaller Than or Equal to 24";
//     }
//
//     return "More Than 24";
// }
//
// testLessOrEqual(10);
// ===

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);