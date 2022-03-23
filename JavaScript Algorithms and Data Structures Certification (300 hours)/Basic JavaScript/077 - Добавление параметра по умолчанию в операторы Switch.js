// Добавление параметра по умолчанию в операторы Switch
// В switchоператоре вы не сможете указать все возможные значения в качестве caseоператоров. Вместо этого вы можете добавить defaultоператор, который будет выполняться, если соответствующие caseоператоры не будут найдены. Думайте об этом как о последнем elseутверждении в if/elseцепочке.
//
//     Заявление defaultдолжно быть последним случаем.
//
// switch (num) {
// case value1:
//         statement1;
//     break;
// case value2:
//         statement2;
//     break;
// ...
// default:
//     defaultStatement;
//     break;
// }
// Напишите оператор switch для установки answerследующих условий:
//     a- apple
//     b- bird
//     c- cat
//     default-stuff
//
//         switchOfStuff("a")должен вернуть строкуapple
//
//         switchOfStuff("b")должен вернуть строкуbird
//
//         switchOfStuff("c")должен вернуть строкуcat
//
//         switchOfStuff("d")должен вернуть строкуstuff
//
//         switchOfStuff(4)должен вернуть строкуstuff
//
//         Вы не должны использовать операторы any ifилиelse
//
//         Вы должны использовать defaultзаявление
//
//         У вас должно быть не менее 3 breakутверждений

// ===
// function switchOfStuff(val) {
//     let answer = "";
//     // Only change code below this line
//
//
//
//     // Only change code above this line
//     return answer;
// }
//
// switchOfStuff(1);
// ===

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);