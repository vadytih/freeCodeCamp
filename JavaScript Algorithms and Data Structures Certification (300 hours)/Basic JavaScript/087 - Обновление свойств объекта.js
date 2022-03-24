// Обновление свойств объекта
// После того, как вы создали объект JavaScript, вы можете обновить его свойства в любое время так же, как и любую другую переменную. Для обновления можно использовать либо точку, либо скобки.
//
//     Например, давайте посмотрим на ourDog:
//
//     const ourDog = {
//         "name": "Camper",
//         "legs": 4,
//         "tails": 1,
//         "friends": ["everything!"]
//     };
// Поскольку он особенно счастливая собака, давайте изменим его имя на строку Happy Camper. Вот как мы обновляем свойство имени его объекта: ourDog.name = "Happy Camper";или ourDog["name"] = "Happy Camper";Теперь, когда мы оцениваем ourDog.name, вместо получения Camperмы получим его новое имя, Happy Camper.
//
//     Обновите myDogсвойство имени объекта. Давайте изменим ее имя с Coderна Happy Coder. Вы можете использовать либо точку, либо квадратную нотацию.
//
//     myDogВы должны обновить nameсвойство , чтобы оно равнялось строке Happy Coder.
//
//     Не следует редактировать myDogопределение.

// ===
// // Setup
// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
// };
//
// // Only change code below this line
// ===

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";