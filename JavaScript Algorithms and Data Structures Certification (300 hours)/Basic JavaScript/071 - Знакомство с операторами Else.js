// Знакомство с операторами Else
// Когда условие для ifоператора истинно, выполняется блок кода, следующий за ним. Что делать, если это условие ложно? Обычно ничего бы не случилось. С elseоператором может быть выполнен альтернативный блок кода.
//
// if (num > 10) {
//     return "Bigger than 10";
// } else {
//     return "10 or Less";
// }
// Объедините ifутверждения в одно if/elseутверждение.
//
//     У вас должен быть только один ifоператор в редакторе
//
// Вы должны использовать elseзаявление
//
// testElse(4)должен вернуть строку5 or Smaller
//
// testElse(5)должен вернуть строку5 or Smaller
//
// testElse(6)должен вернуть строкуBigger than 5
//
// testElse(10)должен вернуть строкуBigger than 5
//
// Вы не должны изменять код выше или ниже указанных комментариев.

// ===
// function testElse(val) {
//     let result = "";
//     // Only change code below this line
//
//     if (val > 5) {
//         result = "Bigger than 5";
//     }
//
//     if (val <= 5) {
//         result = "5 or Smaller";
//     }
//
//     // Only change code above this line
//     return result;
// }
//
// testElse(4);
// ===

function testElse(val) {
    let result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

testElse(4);