// Использование объектов для поиска
// Объекты можно рассматривать как хранилище ключей/значений, например словарь. Если у вас есть табличные данные, вы можете использовать объект для поиска значений, а не switchоператор или if/elseцепочку. Это наиболее полезно, когда вы знаете, что ваши входные данные ограничены определенным диапазоном.
//
//     Вот пример простого поиска в обратном алфавите:
//
//     const alpha = {
//         1:"Z",
//         2:"Y",
//         3:"X",
//         4:"W",
//         ...
//             24:"C",
//     25:"B",
//     26:"A"
// };
//
// alpha[2];
// alpha[24];
//
// const value = 2;
// alpha[value];
// alpha[2]это строка Y, alpha[24]это строка Cи alpha[value]это строка Y.
//
//     Преобразуйте оператор switch в объект с именем lookup. Используйте его, чтобы найти valи присвоить связанную строку resultпеременной.
//
// phoneticLookup("alpha")должна равняться строкеAdams
//
//     phoneticLookup("bravo")должна равняться строкеBoston
//
//     phoneticLookup("charlie")должна равняться строкеChicago
//
//     phoneticLookup("delta")должна равняться строкеDenver
//
//     phoneticLookup("echo")должна равняться строкеEasy
//
//     phoneticLookup("foxtrot")должна равняться строкеFrank
//
//     phoneticLookup("")должен равнятьсяundefined
//
//     Вы не должны изменять returnзаявление
//
//     Вы не должны использовать операторы case, switch, илиif

// ===
// // Setup
// function phoneticLookup(val) {
//     let result = "";
//
//     // Only change code below this line
//     switch(val) {
//         case "alpha":
//             result = "Adams";
//             break;
//         case "bravo":
//             result = "Boston";
//             break;
//         case "charlie":
//             result = "Chicago";
//             break;
//         case "delta":
//             result = "Denver";
//             break;
//         case "echo":
//             result = "Easy";
//             break;
//         case "foxtrot":
//             result = "Frank";
//     }
//
//     // Only change code above this line
//     return result;
// }
//
// phoneticLookup("charlie");
// ===

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }

    result = lookup[val];

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");