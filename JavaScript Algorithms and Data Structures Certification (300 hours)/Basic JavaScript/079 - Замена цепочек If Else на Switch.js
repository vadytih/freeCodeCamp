// Замена цепочек If Else на Switch
// Если у вас есть много вариантов на выбор, switchнаписать оператор может быть проще, чем множество связанных операторов if/ . else ifПоследующий:
//
//     if (val === 1) {
//         answer = "a";
//     } else if (val === 2) {
//         answer = "b";
//     } else {
//         answer = "c";
//     }
// можно заменить на:
//
//     switch(val) {
//         case 1:
//             answer = "a";
//             break;
//         case 2:
//             answer = "b";
//             break;
//         default:
//             answer = "c";
//     }
// Измените связанные операторы if/ else ifна switchоператор.
//
//     Вы не должны использовать какие -либо elseоператоры где-либо в редакторе.
//
//     Вы не должны использовать какие -либо ifоператоры где-либо в редакторе.
//
//     У вас должно быть не менее четырех breakутверждений
//
// chainToSwitch("bob")должна быть строкаMarley
//
// chainToSwitch(42)должна быть строкаThe Answer
//
// chainToSwitch(1)должна быть строкаThere is no #1
//
// chainToSwitch(99)должна быть строкаMissed me by this much!
//
//     chainToSwitch(7)должна быть строкаAte Nine
//
// chainToSwitch("John")должно быть ""(пустая строка)
//
// chainToSwitch(156)должно быть ""(пустая строка)

// ===
// function chainToSwitch(val) {
//     let answer = "";
//     // Only change code below this line
//
//     if (val === "bob") {
//         answer = "Marley";
//     } else if (val === 42) {
//         answer = "The Answer";
//     } else if (val === 1) {
//         answer = "There is no #1";
//     } else if (val === 99) {
//         answer = "Missed me by this much!";
//     } else if (val === 7) {
//         answer = "Ate Nine";
//     }
//
//     // Only change code above this line
//     return answer;
// }
//
// chainToSwitch(7);
// ===

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);