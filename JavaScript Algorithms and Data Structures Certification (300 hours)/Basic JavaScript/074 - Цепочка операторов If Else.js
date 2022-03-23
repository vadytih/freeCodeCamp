// Цепочка операторов If Else
// if/elseоператоры могут быть объединены в цепочку для сложной логики. Вот псевдокод нескольких связанных операторов if/ :else if
//
//     if (condition1) {
//         statement1
//     } else if (condition2) {
//         statement2
//     } else if (condition3) {
//         statement3
//             . . .
//     } else {
//         statementN
//     }
// Напишите цепочку операторов if/ else if, чтобы выполнить следующие условия:
//
//     num < 5- вернуться Tiny
// num < 10- вернуться Small
// num < 15- вернуться Medium
// num < 20- вернуться Large
// num >= 20- вернутьсяHuge
//
// У вас должно быть не менее четырех elseутверждений
//
// У вас должно быть не менее четырех ifутверждений
//
// У вас должно быть хотя бы одно returnзаявление
//
// testSize(0)должен вернуть строкуTiny
//
// testSize(4)должен вернуть строкуTiny
//
// testSize(5)должен вернуть строкуSmall
//
// testSize(8)должен вернуть строкуSmall
//
// testSize(10)должен вернуть строкуMedium
//
// testSize(14)должен вернуть строкуMedium
//
// testSize(15)должен вернуть строкуLarge
//
// testSize(17)должен вернуть строкуLarge
//
// testSize(20)должен вернуть строкуHuge
//
// testSize(25)должен вернуть строкуHuge

// ===
// function testSize(num) {
//     // Only change code below this line
//
//
//     return "Change Me";
//     // Only change code above this line
// }
//
// testSize(7);
// ===

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else {
        return "Huge";
    }

    // Only change code above this line
}

testSize(7);