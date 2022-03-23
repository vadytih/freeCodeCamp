// Управление массивами с помощью push()
// Простой способ добавления данных в конец массива — через push()функцию.
//
//     .push()принимает один или несколько параметров и "помещает" их в конец массива.
//
//     Примеры:
//
// const arr1 = [1, 2, 3];
// arr1.push(4);
//
// const arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// arr1теперь имеет значение [1, 2, 3, 4]и arr2имеет значение ["Stimpson", "J", "cat", ["happy", "joy"]].
//
//     Нажмите ["dog", 3]на конец myArrayпеременной.
//
//     myArrayтеперь должно равняться [["John", 23], ["cat", 2], ["dog", 3]].

// ===
// // Setup
// const myArray = [["John", 23], ["cat", 2]];
//
// // Only change code below this line
//
// ===

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);