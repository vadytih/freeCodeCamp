// Сравнения с логическим оператором И
// Иногда вам нужно будет протестировать более одной вещи за раз. Логический оператор and&& ( ) возвращает trueзначение тогда и только тогда, когда операнды слева и справа от него истинны.
//
//     Тот же эффект может быть достигнут путем вложения оператора if внутрь другого оператора if:
//
// if (num > 5) {
//     if (num < 10) {
//         return "Yes";
//     }
// }
// return "No";
// будет возвращаться только в том случае, Yesесли numбольше 5и меньше 10. Та же логика может быть записана как:
//
//     if (num > 5 && num < 10) {
//         return "Yes";
//     }
// return "No";
// Замените два оператора if одним оператором, используя &&оператор, который вернет строку Yes, если valменьше или равно 50и больше или равно 25. В противном случае будет возвращена строка No.
//
//     Вы должны использовать &&оператор один раз
//
// У вас должно быть только одно ifзаявление
//
// testLogicalAnd(0)должен вернуть строкуNo
//
// testLogicalAnd(24)должен вернуть строкуNo
//
// testLogicalAnd(25)должен вернуть строкуYes
//
// testLogicalAnd(30)должен вернуть строкуYes
//
// testLogicalAnd(50)должен вернуть строкуYes
//
// testLogicalAnd(51)должен вернуть строкуNo
//
// testLogicalAnd(75)должен вернуть строкуNo
//
// testLogicalAnd(80)должен вернуть строкуNo

// ===
// function testLogicalAnd(val) {
//     // Only change code below this line
//
//     if (val) {
//         if (val) {
//             return "Yes";
//         }
//     }
//
//     // Only change code above this line
//     return "No";
// }
//
// testLogicalAnd(10);
// ===

function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);