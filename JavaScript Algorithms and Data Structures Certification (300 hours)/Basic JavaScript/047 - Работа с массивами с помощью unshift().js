// Работа с массивами с помощью unshift()
// Вы можете не только добавлять элементы в shiftначало массива, но и unshiftэлементы в начало массива, т.е. добавлять элементы перед массивом.
//
//     .unshift()работает точно так же .push(), но вместо добавления элемента в конец массива unshift()добавляет элемент в начало массива.
//
//     Пример:
//
// const ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift();
// ourArray.unshift("Happy");
// После shift, ourArrayбудет иметь значение ["J", "cat"]. После unshift, ourArrayбудет иметь значение ["Happy", "J", "cat"].
//
//     Добавьте ["Paul", 35]в начало myArrayпеременной, используя unshift().
//
// ===
// // Setup
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
//
// // Only change code below this line
//
// ===

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);