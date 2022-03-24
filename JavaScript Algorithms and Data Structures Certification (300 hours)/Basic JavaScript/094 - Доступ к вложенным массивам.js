// Доступ к вложенным массивам
// Как мы видели в предыдущих примерах, объекты могут содержать как вложенные объекты, так и вложенные массивы. Подобно доступу к вложенным объектам, нотация скобок массива может быть связана для доступа к вложенным массивам.
//
//     Вот пример того, как получить доступ к вложенному массиву:
//
//     const ourPets = [
//         {
//             animalType: "cat",
//             names: [
//                 "Meowzer",
//                 "Fluffy",
//                 "Kit-Cat"
//             ]
//         },
//         {
//             animalType: "dog",
//             names: [
//                 "Spot",
//                 "Bowser",
//                 "Frankie"
//             ]
//         }
//     ];
//
// ourPets[0].names[1];
// ourPets[1].names[0];
// ourPets[0].names[1]будет строка Fluffy, и ourPets[1].names[0]будет строка Spot.
//
//     Используя нотацию с точкой и квадратными скобками, установите переменную secondTreeна второй элемент в treesсписке от myPlantsобъекта.
//
//     secondTreeдолжен равняться строке pine.
//
//     В вашем коде для доступа к файлам myPlants.

// ===
// const myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];
//
// const secondTree = "";
// ===

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

const secondTree = myPlants[1].list[1];