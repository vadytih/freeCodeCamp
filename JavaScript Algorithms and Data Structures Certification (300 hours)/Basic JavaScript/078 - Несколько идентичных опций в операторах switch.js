// Несколько идентичных опций в операторах switch
//     Если breakоператор отсутствует в switchоператоре case, следующие caseоператоры выполняются до тех пор, пока breakне встретится a. Если у вас есть несколько входов с одним и тем же выходом, вы можете представить их в таком switchвыражении:
//
//         let result = "";
//         switch(val) {
//             case 1:
//             case 2:
//             case 3:
//                 result = "1, 2, or 3";
//                 break;
//             case 4:
//                 result = "4 alone";
//         }
//         Варианты 1, 2 и 3 дадут одинаковый результат.
//
//             Напишите оператор switch для установки answerследующих диапазонов:
//             1-3- Low
//             4-6- Mid
//             7-9-High
//
//             Примечание. Вам потребуется caseзаявление для каждого числа в диапазоне.
//
//             sequentialSizes(1)должен вернуть строкуLow
//
//             sequentialSizes(2)должен вернуть строкуLow
//
//             sequentialSizes(3)должен вернуть строкуLow
//
//             sequentialSizes(4)должен вернуть строкуMid
//
//             sequentialSizes(5)должен вернуть строкуMid
//
//             sequentialSizes(6)должен вернуть строкуMid
//
//             sequentialSizes(7)должен вернуть строкуHigh
//
//             sequentialSizes(8)должен вернуть строкуHigh
//
//             sequentialSizes(9)должен вернуть строкуHigh
//
//             Вы не должны использовать операторы any ifилиelse
//
//             У вас должно быть девять caseутверждений

// ===
// function sequentialSizes(val) {
//     let answer = "";
//     // Only change code below this line
//
//
//
//     // Only change code above this line
//     return answer;
// }
//
// sequentialSizes(1);
// ===

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);