// Практика сравнения различных значений
// В последних двух задачах мы узнали об операторе равенства ( ==) и операторе строгого равенства ( ===). Давайте сделаем быстрый обзор и попрактикуемся в использовании этих операторов еще немного.
//
//     Если сравниваемые значения не относятся к одному и тому же типу, оператор равенства выполнит преобразование типа, а затем оценит значения. Однако оператор строгого равенства сравнивает как тип данных, так и значение как есть, без преобразования одного типа в другой.
//
//     Примеры
//
// 3 == '3'возвращает true, потому что JavaScript выполняет преобразование типа из строки в число. 3 === '3'возвращает false, поскольку типы различаются и преобразование типов не выполняется.
//
//     Примечание. В JavaScript вы можете определить тип переменной или значения с помощью typeofоператора следующим образом:
//
//     typeof 3
// typeof '3'
// typeof 3возвращает строку numberи typeof '3'возвращает строку string.
//
//     Функция compareEqualityв редакторе сравнивает два значения с помощью оператора равенства. Измените функцию, чтобы она возвращала строку Equalтолько тогда, когда значения строго равны.
//
// compareEquality(10, "10")должен вернуть строкуNot Equal
//
// compareEquality("20", 20)должен вернуть строкуNot Equal
//
// Вы должны использовать ===оператор

// ===
// // Setup
// function compareEquality(a, b) {
//     if (a == b) { // Change this line
//         return "Equal";
//     }
//     return "Not Equal";
// }
//
// compareEquality(10, "10");
// ===

// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");