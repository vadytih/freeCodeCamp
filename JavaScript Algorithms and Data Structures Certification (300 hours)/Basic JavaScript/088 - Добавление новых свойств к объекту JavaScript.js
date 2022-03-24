// Добавление новых свойств к объекту JavaScript
// Вы можете добавлять новые свойства к существующим объектам JavaScript так же, как вы их изменяете.
//
//     Вот как мы добавим barkсвойство в ourDog:
//
//     ourDog.bark = "bow-wow";
// или
//
// ourDog["bark"] = "bow-wow";
// Теперь, когда мы оценим ourDog.bark, мы получим его лай bow-wow.
//
//     Пример:
//
// const ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
//
// ourDog.bark = "bow-wow";
// Добавьте barkсвойство myDogи задайте для него звук собаки, например "гав". Вы можете использовать либо точку, либо квадратную нотацию.
//
//     Вы должны добавить свойство barkв myDog.
//
//     Вы не должны добавлять barkк инициализации myDog.

// ===
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
// ===

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "bow-wow";