// Доступ к вложенным объектам
// Доступ к подсвойствам объектов можно получить, соединив вместе точки или квадратные скобки.
//
//     Вот вложенный объект:
//
//     const ourStorage = {
//         "desk": {
//             "drawer": "stapler"
//         },
//         "cabinet": {
//             "top drawer": {
//                 "folder1": "a file",
//                 "folder2": "secrets"
//             },
//             "bottom drawer": "soda"
//         }
//     };
//
// ourStorage.cabinet["top drawer"].folder2;
// ourStorage.desk.drawer;
// ourStorage.cabinet["top drawer"].folder2будет строка secrets, и ourStorage.desk.drawerбудет строка stapler.
//
//     Получите доступ к myStorageобъекту и назначьте содержимое glove boxсвойства gloveBoxContentsпеременной. По возможности используйте запись через точку для всех свойств, в противном случае используйте запись в квадратных скобках.
//
//     gloveBoxContentsдолжен равняться строке maps.
//
//     В вашем коде для доступа к файлам myStorage.

// ===
// const myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
//
// const gloveBoxContents = undefined;
// ===

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];