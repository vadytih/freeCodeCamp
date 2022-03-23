// Выбор из множества вариантов с операторами Switch
// Если у вас есть много вариантов на выбор, используйте оператор switch . Оператор switchпроверяет значение и может иметь множество операторов case , определяющих различные возможные значения. Операторы выполняются с первого совпавшего caseзначения до тех пор, пока breakне встретится a.
//
//     Вот пример switchзаявления:
//
//     switch(lowercaseLetter) {
//         case "a":
//             console.log("A");
//             break;
//         case "b":
//             console.log("B");
//             break;
//     }
//     caseзначения проверяются на строгое равенство ( ===). Сообщает breakJavaScript прекратить выполнение операторов. Если breakопущено, будет выполнен следующий оператор.
//
//         Напишите оператор switch, который проверяет valи устанавливает answerследующие условия:
//         1- alpha
//         2- beta
//         3- gamma
//         4-delta
//
//         caseInSwitch(1)должно иметь значение строкиalpha
//
//         caseInSwitch(2)должно иметь значение строкиbeta
//
//         caseInSwitch(3)должно иметь значение строкиgamma
//
//         caseInSwitch(4)должно иметь значение строкиdelta
//
//         Вы не должны использовать операторы any ifилиelse
//
//         У вас должно быть не менее 3 breakутверждений

// ===
// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//
//
//
//     // Only change code above this line
//     return answer;
// }
//
// caseInSwitch(1);
// ===

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    // Only change code above this line
    return answer;
}

caseInSwitch(1);