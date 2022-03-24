// Доступ к свойствам объекта с помощью переменных
// Еще одно использование квадратных скобок для объектов — доступ к свойству, которое хранится как значение переменной. Это может быть очень полезно для перебора свойств объекта или при доступе к таблице поиска.
//
//     Вот пример использования переменной для доступа к свойству:
//
//     const dogs = {
//         Fido: "Mutt",
//         Hunter: "Doberman",
//         Snoopie: "Beagle"
//     };
//
// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// Строка Dobermanбудет отображаться в консоли.
//
//     Другой способ использования этой концепции — динамический сбор имени свойства во время выполнения программы следующим образом:
//
//     const someObj = {
//         propName: "John"
//     };
//
// function propPrefix(str) {
//     const s = "prop";
//     return s + str;
// }
//
// const someProp = propPrefix("Name");
// console.log(someObj[someProp]);
// somePropбудет иметь значение string propName, и строка Johnбудет отображаться в консоли.
//
//     Обратите внимание, что мы не используем кавычки вокруг имени переменной при использовании его для доступа к свойству, потому что мы используем значение переменной, а не имя .
//
//     Установите playerNumberпеременную в 16. Затем используйте переменную, чтобы найти имя игрока и присвоить его player.
//
//     playerNumberдолжно быть число
//
// Переменная playerдолжна быть строкой
//
// Значение playerдолжно быть строкойMontana
//
// Вы должны использовать обозначение в квадратных скобках для доступаtestObj
//
// Вы не должны присваивать значение Montanaпеременной playerнапрямую.
//
//     Вы должны использовать переменную playerNumberв скобках

// ===
// // Setup
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };
//
// // Only change code below this line
// const playerNumber = 42;  // Change this line
// const player = testObj;   // Change this line
// ===

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line