// Удалить свойства из объекта JavaScript
// Мы также можем удалить свойства из объектов следующим образом:
//
//     delete ourDog.bark;
// Пример:
//
//     const ourDog = {
//         "name": "Camper",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["everything!"],
//         "bark": "bow-wow"
//     };
//
// delete ourDog.bark;
// После последней строки, показанной выше, ourDogвыглядит так:
//
// {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// }
// Удалить tailsсвойство из myDog. Вы можете использовать либо точку, либо квадратную нотацию.
//
//     Вы должны удалить свойство tailsиз myDog.
//
//     Не следует изменять myDogустановку.

// ===
// // Setup
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
// };
//
// // Only change code below this line
// ===

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line
delete myDog.tails;