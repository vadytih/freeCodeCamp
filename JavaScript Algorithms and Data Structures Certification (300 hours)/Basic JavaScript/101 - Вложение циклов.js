// Вложение циклов
// Если у вас есть многомерный массив, вы можете использовать ту же логику, что и предыдущая путевая точка, для прохода как по массиву, так и по любым подмассивам. Вот пример:
//
//     const arr = [
//         [1, 2], [3, 4], [5, 6]
//     ];
//
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }
// Это выводит каждый подэлемент по arrодному за раз. Обратите внимание, что во внутреннем цикле мы проверяем значение .lengthof arr[i], так как arr[i]оно само является массивом.
//
//     Измените функцию multiplyAllтак, чтобы она возвращала произведение всех чисел в подмассивах arr.
//
// multiplyAll([[1], [2], [3]])должен вернуться6
//
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]])должен вернуться5040
//
// multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])должен вернуться54
//
// ===
// function multiplyAll(arr) {
//     let product = 1;
//     // Only change code below this line
//
//     // Only change code above this line
//     return product;
// }
//
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// ===

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i <= arr.length -1; i++) {
        for(let g = 0; g <= arr[i].length -1; g++) {
            product *= arr[i][g];
        }

    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);