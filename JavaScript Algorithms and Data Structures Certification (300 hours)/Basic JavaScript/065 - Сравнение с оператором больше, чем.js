// Сравнение с оператором больше, чем
// Оператор «больше чем» ( >) сравнивает значения двух чисел. Если число слева больше числа справа, возвращается true. В противном случае возвращается false.
//
//     Как и оператор равенства, оператор «больше чем» будет преобразовывать типы данных значений при сравнении.
//
//     Примеры
//
// 5   >  3  // true
// 7   > '3' // true
// 2   >  3  // false
// '1' >  9  // false
// Добавьте оператор «больше чем» к указанным строкам, чтобы операторы return имели смысл.
//
// testGreaterThan(0)должен вернуть строку10 or Under
//
// testGreaterThan(10)должен вернуть строку10 or Under
//
// testGreaterThan(11)должен вернуть строкуOver 10
//
// testGreaterThan(99)должен вернуть строкуOver 10
//
// testGreaterThan(100)должен вернуть строкуOver 10
//
// testGreaterThan(101)должен вернуть строкуOver 100
//
// testGreaterThan(150)должен вернуть строкуOver 100
//
// Вы должны использовать >оператор как минимум дважды

// ===
// function testGreaterThan(val) {
//     if (val) {  // Change this line
//         return "Over 100";
//     }
//
//     if (val) {  // Change this line
//         return "Over 10";
//     }
//
//     return "10 or Under";
// }
//
// testGreaterThan(10);
// ===

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);