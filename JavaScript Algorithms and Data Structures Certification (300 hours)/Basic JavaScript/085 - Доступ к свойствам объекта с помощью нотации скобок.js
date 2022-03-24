// Доступ к свойствам объекта с помощью нотации скобок
// Второй способ доступа к свойствам объекта — запись в квадратных скобках ( []). Если в имени свойства объекта, к которому вы пытаетесь получить доступ, есть пробел, вам нужно будет использовать обозначение в квадратных скобках.
//
//     Однако вы по-прежнему можете использовать скобки для свойств объекта без пробелов.
//
//     Вот пример использования нотации скобок для чтения свойства объекта:
//
//     const myObj = {
//         "Space Name": "Kirk",
//         "More Space": "Spock",
//         "NoSpace": "USS Enterprise"
//     };
//
// myObj["Space Name"];
// myObj['More Space'];
// myObj["NoSpace"];
// myObj["Space Name"]будет строкой Kirk, myObj['More Space']будет строкой Spockи myObj["NoSpace"]будет строкой USS Enterprise.
//
//     Обратите внимание, что имена свойств с пробелами в них должны быть в кавычках (одинарных или двойных).
//
// Прочитайте значения свойств an entreeи the drinkиспользования testObjскобочной нотации и присвойте их соответственно entreeValueи drinkValue.
//
//     entreeValueдолжна быть строка
//
// Значение entreeValueдолжно быть строкойhamburger
//
// drinkValueдолжна быть строка
//
// Значение drinkValueдолжно быть строкойwater
//
// Вы должны использовать скобки дважды

// ===
// // Setup
// const testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
// };
//
// // Only change code below this line
// const entreeValue = testObj;   // Change this line
// const drinkValue = testObj;    // Change this line
// ===

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line