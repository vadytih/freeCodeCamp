// Перебор массива с помощью цикла for
//     Распространенной задачей в JavaScript является перебор содержимого массива. Один из способов сделать это — использовать forцикл. Этот код выведет каждый элемент массива arrна консоль:
//
//     const arr = [10, 9, 8, 7, 6];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// Помните, что индексация массивов начинается с нуля, что означает, что последний индекс массива равен length - 1. Наше условие для этого цикла i < arr.lengthостанавливает цикл, когда iравно length. В этом случае последняя итерация, i === 4т.е. когда iстановится равно arr.length - 1и выводится 6на консоль. Затем iувеличивается до 5, и цикл завершается, потому i < arr.lengthчто false.
//
//     Объявите и инициализируйте переменную totalв 0. Используйте forцикл, чтобы добавить значение каждого элемента myArrмассива в total.
//
//     totalдолжны быть объявлены и инициализированы 0.
//
// totalдолжно равняться 20.
//
// Вы должны использовать forцикл для итерации через myArr.
//
//     Вы не должны пытаться напрямую присвоить значение 20 total.

// ===
// // Setup
// const myArr = [2, 3, 4, 5, 6];
//
// // Only change code below this line
//
// ===

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
const total = 0;

for(let i = 0; i < myArr.length; i++){
    total += myArr[i];
}