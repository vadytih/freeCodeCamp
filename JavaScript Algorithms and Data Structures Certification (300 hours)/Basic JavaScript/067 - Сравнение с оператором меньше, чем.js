// Сравнение с оператором меньше, чем
// Оператор меньше чем ( <) сравнивает значения двух чисел. Если число слева меньше числа справа, возвращается true. В противном случае возвращается false. Как и оператор равенства, оператор меньше преобразует типы данных при сравнении.
//
// Примеры
//
// 2   < 5 // true
// '3' < 7 // true
// 5   < 5 // false
// 3   < 2 // false
// '8' < 4 // false
// Добавьте оператор «меньше чем» к указанным строкам, чтобы операторы return имели смысл.
//
// testLessThan(0)должен вернуть строкуUnder 25
//
// testLessThan(24)должен вернуть строкуUnder 25
//
// testLessThan(25)должен вернуть строкуUnder 55
//
// testLessThan(54)должен вернуть строкуUnder 55
//
// testLessThan(55)должен вернуть строку55 or Over
//
// testLessThan(99)должен вернуть строку55 or Over
//
// Вы должны использовать <оператор как минимум дважды

// ===
// function testLessThan(val) {
//     if (val) {  // Change this line
//         return "Under 25";
//     }
//
//     if (val) {  // Change this line
//         return "Under 55";
//     }
//
//     return "55 or Over";
// }
//
// testLessThan(10);
// ===

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);