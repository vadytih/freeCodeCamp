// Работа с массивами с помощью shift()
// pop()всегда удаляет последний элемент массива. Что делать, если вы хотите удалить первый?
//
//     Вот тут-то и .shift()пригодится. Он работает так же, как и .pop(), за исключением того, что он удаляет первый элемент вместо последнего.
//
//     Пример:
//
// const ourArray = ["Stimpson", "J", ["cat"]];
// const removedFromOurArray = ourArray.shift();
// removedFromOurArrayбудет иметь значение строки Stimpson, и ourArrayбудет иметь ["J", ["cat"]].
//
// Используйте .shift()функцию, чтобы удалить первый элемент из myArrayи присвоить «смещенное значение» новой переменной, removedFromMyArray.
//
//     myArrayтеперь должно равняться [["dog", 3]].
//
//     removedFromMyArrayдолжен содержать ["John", 23].
//
// ===
// // Setup
// const myArray = [["John", 23], ["dog", 3]];
//
// // Only change code below this line
// ===

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();