// Стоять в очереди
// В информатике очередь — это абстрактная структура данных , в которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конец очереди, а старые элементы удалены из начала очереди.
//
//     Напишите функцию, nextInLineкоторая принимает массив ( arr) и число ( item) в качестве аргументов.
//
//     Добавьте число в конец массива, затем удалите первый элемент массива.
//
//     Затем nextInLineфункция должна вернуть элемент, который был удален.
//
// nextInLine([], 5)должен вернуть число.
//
// nextInLine([], 1)должен вернуться1
//
// nextInLine([2], 1)должен вернуться2
//
// nextInLine([5,6,7,8,9], 1)должен вернуться5
//
// После nextInLine(testArr, 10)должно testArr[4]быть10

// ===
// function nextInLine(arr, item) {
//     // Only change code below this line
//
//     return item;
//     // Only change code above this line
// }
//
// // Setup
// const testArr = [1, 2, 3, 4, 5];
//
// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));
// ===

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();

    return item;
    // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));