// Подсчет карт
// В игре казино Блэкджек игрок может получить преимущество над домом, отслеживая относительное количество старших и младших карт, оставшихся в колоде. Это называется подсчетом карт .
//
//     Наличие большего количества старших карт в колоде благоприятствует игроку. Каждой карте присваивается значение в соответствии с таблицей ниже. Когда счет положительный, игрок должен делать большие ставки. Когда счет равен нулю или отрицательный, игрок должен делать ставку меньше.
//
//     Подсчет изменений	Карты
// +1	2, 3, 4, 5, 6
// 0	7, 8, 9
// -1	10, 'J', 'Q', 'К', 'А'
// Вы напишете функцию подсчета карт. Он получит cardпараметр, который может быть числом или строкой, и увеличит или уменьшит глобальную countпеременную в соответствии со значением карты (см. таблицу). Затем функция вернет строку с текущим счетчиком и строку Bet, если счетчик положительный или Holdнулевой или отрицательный. Текущий счет и решение игрока ( Betили Hold) должны быть разделены одним пробелом.
//
//     Пример выходных данных: -3 Hold или5 Bet
//
// Совет
// НЕ сбрасывайте countна 0, когда значение равно 7, 8 или 9.
// НЕ возвращайте массив.
//     НЕ включайте кавычки (одинарные или двойные) в вывод.
//
//     Последовательность карт 2, 3, 4, 5, 6 должна возвращать строку5 Bet
//
// Последовательность карт 7, 8, 9 должна возвращать строку0 Hold
//
// Последовательность карт 10, J, Q, K, A должна возвращать строку-5 Hold
//
// Последовательность карт 3, 7, Q, 8, A должна возвращать строку-1 Hold
//
// Cards Sequence 2, J, 9, 2, 7 должны возвращать строку1 Bet
//
// Последовательность карт 2, 2, 10 должна возвращать строку1 Bet
//
// Последовательность карт 3, 2, A, 10, K должна возвращать строку-1 Hold

// ===
// let count = 0;
//
// function cc(card) {
//     // Only change code below this line
//
//
//     return "Change Me";
//     // Only change code above this line
// }
//
// cc(2); cc(3); cc(7); cc('K'); cc('A');
// ===

let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count = count + 1;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count = count - 1;
    }

    if (count <= 0) {
        return count + " Hold";
    }
    else {
        return count + " Bet";
    }
    // Only change code above this line
}

// cc(2); cc(3); cc(7); cc('K'); cc('A');