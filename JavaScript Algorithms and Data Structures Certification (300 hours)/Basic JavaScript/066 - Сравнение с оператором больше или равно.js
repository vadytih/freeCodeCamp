// Сравнение с оператором больше или равно
// Оператор больше или равно ( >=) сравнивает значения двух чисел. Если число слева больше или равно числу справа, возвращается true. В противном случае возвращается false.
//
//     Как и оператор равенства, оператор больше или равно будет преобразовывать типы данных при сравнении.
//
//     Примеры
//
// 6   >=  6  // true
// 7   >= '3' // true
// 2   >=  3  // false
// '7' >=  9  // false
// Добавьте оператор больше или равно к указанным строкам, чтобы операторы return имели смысл.
//
// testGreaterOrEqual(0)должен вернуть строкуLess than 10
//
// testGreaterOrEqual(9)должен вернуть строкуLess than 10
//
// testGreaterOrEqual(10)должен вернуть строку10 or Over
//
// testGreaterOrEqual(11)должен вернуть строку10 or Over
//
// testGreaterOrEqual(19)должен вернуть строку10 or Over
//
// testGreaterOrEqual(100)должен вернуть строку20 or Over
//
// testGreaterOrEqual(21)должен вернуть строку20 or Over
//
// Вы должны использовать >=оператор как минимум дважды

// ===
// function testGreaterOrEqual(val) {
//     if (val) {  // Change this line
//         return "20 or Over";
//     }
//
//     if (val) {  // Change this line
//         return "10 or Over";
//     }
//
//     return "Less than 10";
// }
//
// testGreaterOrEqual(10);
// ===

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);