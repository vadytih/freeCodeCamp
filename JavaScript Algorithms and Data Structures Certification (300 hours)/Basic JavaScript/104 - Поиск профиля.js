// Поиск профиля
// У нас есть массив объектов, представляющих разных людей в наших списках контактов.
//
//     Функция lookUpProfile, которая принимает nameи свойство ( prop) в качестве аргументов, была предварительно написана для вас.
//
//     Функция должна проверять, nameявляется ли контакт реальным firstNameи данное свойство ( prop) является свойством этого контакта.
//
//     Если оба верны, верните «значение» этого свойства.
//
//     Если nameне соответствует ни одному контакту, то вернуть строку No such contact.
//
//     Если propне соответствует ни одному допустимому свойству контакта, найденному совпадающим, nameверните строку No such property.
//
// lookUpProfile("Kristian", "lastName")должен вернуть строкуVos
//
// lookUpProfile("Sherlock", "likes")должен вернуться["Intriguing Cases", "Violin"]
//
// lookUpProfile("Harry", "likes")должен вернуть массив
//
// lookUpProfile("Bob", "number")должен вернуть строкуNo such contact
//
// lookUpProfile("Bob", "potato")должен вернуть строкуNo such contact
//
// lookUpProfile("Akira", "address")должен вернуть строкуNo such property

// ===
// // Setup
// const contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];
//
// function lookUpProfile(name, prop) {
//     // Only change code below this line
//
//     // Only change code above this line
// }
//
// lookUpProfile("Akira", "likes");
// ===

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
console.log('hello');
    // Only change code above this line
}

lookUpProfile("Akira", "likes");