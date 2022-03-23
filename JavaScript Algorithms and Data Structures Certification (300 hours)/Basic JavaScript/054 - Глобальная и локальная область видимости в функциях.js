// Глобальная и локальная область видимости в функциях
// Можно иметь как локальные , так и глобальные переменные с одинаковыми именами. При этом локальная переменная имеет приоритет над глобальной.
//
//     В этом примере:
//
//     const someVar = "Hat";
//
// function myFun() {
//     const someVar = "Head";
//     return someVar;
// }
// Функция myFunвернет строку, Headпоскольку присутствует локальная версия переменной.
//
//     Добавьте локальную переменную в myOutfitфункцию, чтобы переопределить значение outerWearстрокой sweater.
//
//     Вы не должны изменять значение глобального outerWear.
//
//     myOutfitдолжен вернуть строку sweater.
//
//     Вы не должны изменять оператор возврата.

// ===
// // Setup
// const outerWear = "T-Shirt";
//
// function myOutfit() {
//     // Only change code below this line
//
//     // Only change code above this line
//     return outerWear;
// }
//
// myOutfit();
// ===

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    let outerWear = "sweater";
    // Only change code above this line
    return outerWear;
}

myOutfit();