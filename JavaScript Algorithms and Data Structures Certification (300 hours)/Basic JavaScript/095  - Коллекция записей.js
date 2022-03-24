// Коллекция записей
// Вам дан объектный литерал, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы имеют полную информацию.
//
//     Вы начинаете с updateRecordsфункции, которая принимает литерал объекта records, содержащий коллекцию музыкальных альбомов, id, а prop(like artistили tracks) и value. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный функции.
//
//     Ваша функция всегда должна возвращать весь объект коллекции записей.
//     Если propнет tracksи valueне является пустой строкой, обновите или установите для этого альбома propзначение value.
//     Если propесть, tracksно в альбоме нет tracksсвойства, создайте пустой массив и добавьте valueв него.
//     Если propэто tracksи valueне пустая строка, добавьте valueее в конец существующего tracksмассива альбома.
//     Если valueэто пустая строка, удалите данное propсвойство из альбома.
//     Примечание.recordCollection Для тестов используется копия объекта.
//
//     После updateRecords(recordCollection, 5439, "artist", "ABBA")должна artistбыть строкаABBA
//
// После updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracksдолжна иметь строку Take a Chance on Meкак последний и единственный элемент.
//
//     После updateRecords(recordCollection, 2548, "artist", "")не artistследует устанавливать
//
// После updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")должен tracksиметь строку Addicted to Loveв качестве последнего элемента.
//
//     После updateRecords(recordCollection, 2468, "tracks", "Free"), tracksдолжна иметь строку 1999в качестве первого элемента.
//
//     После updateRecords(recordCollection, 2548, "tracks", "")не tracksследует устанавливать
//
// После updateRecords(recordCollection, 1245, "albumTitle", "Riptide")должна albumTitleбыть строкаRiptide

// ===
// // Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };
//
// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//     return records;
// }
//
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// ===

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

    if (prop != "tracks" && records[id].hasOwnProperty(prop) == false && value.length > 0) {
        records[id][prop] = value;
    }
    else if (prop == "tracks" && records[id].hasOwnProperty(prop) == false) {
        records[id][prop] = [value];
    }
    else if (records[id].hasOwnProperty(prop) == true && value.length == 0) {
        delete records[id][prop];
    }
    else if (prop == "tracks" && records[id].hasOwnProperty(prop) == true) {
        records[id][prop].push(value);
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');