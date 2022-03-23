// Сравнения с логическим оператором Or
// Логический оператор or|| ( ) возвращает trueзначение, если один из операндов равен true. В противном случае возвращается false.
//
//     Логический оператор or состоит из двух символов вертикальной черты: ( ||). Обычно это можно найти между клавишами Backspace и Enter.
//
//     Шаблон ниже должен выглядеть знакомым по предыдущим путевым точкам:
//
//     if (num > 10) {
//         return "No";
//     }
// if (num < 5) {
//     return "No";
// }
// return "Yes";
// вернется, Yesтолько если numнаходится между 5и 10(включая 5 и 10). Та же логика может быть записана как:
//
//     if (num > 10 || num < 5) {
//         return "No";
//     }
// return "Yes";
// Объедините два ifоператора в один оператор, который возвращает строку Outside, если valона не находится между 10и 20включительно. В противном случае вернуть строку Inside.
//
//     Вы должны использовать ||оператор один раз
//
// У вас должно быть только одно ifзаявление
//
// testLogicalOr(0)должен вернуть строкуOutside
//
// testLogicalOr(9)должен вернуть строкуOutside
//
// testLogicalOr(10)должен вернуть строкуInside
//
// testLogicalOr(15)должен вернуть строкуInside
//
// testLogicalOr(19)должен вернуть строкуInside
//
// testLogicalOr(20)должен вернуть строкуInside
//
// testLogicalOr(21)должен вернуть строкуOutside
//
// testLogicalOr(25)должен вернуть строкуOutside
//

// ===
// function testLogicalOr(val) {
//     // Only change code below this line
//
//     if (val) {
//         return "Outside";
//     }
//
//     if (val) {
//         return "Outside";
//     }
//
//     // Only change code above this line
//     return "Inside";
// }
//
// testLogicalOr(15);
// ===

function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

testLogicalOr(15);