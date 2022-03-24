// Перебор нечетных чисел с помощью цикла for
//     Циклы for не должны повторяться по одному. Изменив наш final-expression, мы можем считать четными числами.
//
//     Мы начнем с i = 0и зациклим, пока i < 10. Мы будем увеличивать iна 2 каждый цикл с помощью i += 2.
//
// const ourArray = [];
//
// for (let i = 0; i < 10; i += 2) {
//     ourArray.push(i);
// }
// ourArrayтеперь будет содержать [0, 2, 4, 6, 8]. Давайте изменим наш initialization, чтобы мы могли считать нечетными числами.
//
//     Вставьте нечетные числа от 1 до 9 в myArrayцикл for.
//
// Вы должны использовать forцикл для этого.
//
//     myArrayдолжно равняться [1, 3, 5, 7, 9].

// ===
// // Setup
// const myArray = [];
//
// // Only change code below this line
// ===

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 10; i +=2){
    myArray.push(i);
}