// Знакомство с операторами Else If
// Если у вас есть несколько условий, которые необходимо решить, вы можете связать ifоператоры вместе с else ifоператорами.
//
// if (num > 15) {
//     return "Bigger than 15";
// } else if (num < 5) {
//     return "Smaller than 5";
// } else {
//     return "Between 5 and 15";
// }
// Преобразуйте логику, чтобы использовать else ifоператоры.
//
//     У вас должно быть как минимум два elseзаявления
//
// У вас должно быть как минимум два ifзаявления
//
// У вас должны быть закрывающие и открывающие фигурные скобки для каждого if elseблока кода.
//
// testElseIf(0)должен вернуть строкуSmaller than 5
//
// testElseIf(5)должен вернуть строкуBetween 5 and 10
//
// testElseIf(7)должен вернуть строкуBetween 5 and 10
//
// testElseIf(10)должен вернуть строкуBetween 5 and 10
//
// testElseIf(12)должен вернуть строкуGreater than 10

// ===
// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     }
//
//     if (val < 5) {
//         return "Smaller than 5";
//     }
//
//     return "Between 5 and 10";
// }
//
// testElseIf(7);
// ===

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }
}

testElseIf(7);

testElseIf(7);