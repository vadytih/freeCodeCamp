// Логический порядок в операторах If Else
// Порядок важен в if, else ifзаявлениях.
//
//     Функция выполняется сверху вниз, поэтому вам нужно быть осторожным с тем, какой оператор идет первым.
//
//     Возьмите эти две функции в качестве примера.
//
//     Вот первое:
//
//     function foo(x) {
//         if (x < 1) {
//             return "Less than one";
//         } else if (x < 2) {
//             return "Less than two";
//         } else {
//             return "Greater than or equal to two";
//         }
//     }
// А второй просто меняет порядок операторов:
//
//     function bar(x) {
//         if (x < 2) {
//             return "Less than two";
//         } else if (x < 1) {
//             return "Less than one";
//         } else {
//             return "Greater than or equal to two";
//         }
//     }
// Хотя эти две функции выглядят почти одинаково, если мы передаем число обеим, мы получаем разные выходные данные.
//
// foo(0)
// bar(0)
// foo(0)вернет строку Less than oneи bar(0)вернет строку Less than two.
//
//     Измените порядок логики в функции, чтобы она возвращала правильные операторы во всех случаях.
//
// orderMyLogic(4)должен вернуть строкуLess than 5
//
// orderMyLogic(6)должен вернуть строкуLess than 10
//
// orderMyLogic(11)должен вернуть строкуGreater than or equal to 10

// ===
// function orderMyLogic(val) {
//     if (val < 10) {
//         return "Less than 10";
//     } else if (val < 5) {
//         return "Less than 5";
//     } else {
//         return "Greater than or equal to 10";
//     }
// }
//
// orderMyLogic(7);
// ===

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }
    else if (val < 10) {
        return "Less than 10";
    }
    else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);