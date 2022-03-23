// Используйте условную логику с операторами If
// ifОператоры используются для принятия решений в коде. Ключевое слово ifуказывает JavaScript выполнять код в фигурных скобках при определенных условиях, определенных в скобках. Эти условия известны как Booleanусловия, и они могут быть только trueили false.
//
//     Когда условие оценивается как true, программа выполняет оператор внутри фигурных скобок. Когда логическое условие оценивается как false, оператор внутри фигурных скобок не будет выполняться.
//
//     Псевдокод
//
// если ( условие истинно ) {
//     оператор выполнен
// }
// Пример
//
// function test (myCondition) {
//     if (myCondition) {
//         return "It was true";
//     }
//     return "It was false";
// }
//
// test(true);
// test(false);
// test(true)возвращает строку It was trueи test(false)возвращает строку It was false.
//
//     Когда testвызывается со значением true, ifоператор оценивает myCondition, так это trueили нет. Поскольку это так true, функция возвращает значение It was true. Когда мы вызываем testсо значением false, неmyCondition выполняется и оператор в фигурных скобках не выполняется и функция возвращает значение . trueIt was false
//
// Создайте ifоператор внутри функции для возврата Yes, that was true, если параметр wasThatTrueесть, trueи возврата в No, that was falseпротивном случае.
//
//     trueOrFalseдолжна быть функция
//
// trueOrFalse(true)должен вернуть строку
//
// trueOrFalse(false)должен вернуть строку
//
// trueOrFalse(true)должен вернуть строкуYes, that was true
//
// trueOrFalse(false)должен вернуть строкуNo, that was false
// ===
// function trueOrFalse(wasThatTrue) {
//     // Only change code below this line
//
//
//
//     // Only change code above this line
//
// }
// ===

function trueOrFalse(wasThatTrue) {
    // Only change code below this line

    if(wasThatTrue){
        return "Yes, that was true";
    }
    else {
        return "No, that was false";
    }

    // Only change code above this line

}