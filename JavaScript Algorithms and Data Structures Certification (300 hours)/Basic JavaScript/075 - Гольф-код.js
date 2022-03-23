// Гольф-код
// В игре в гольф у каждой лунки есть par, что означает среднее количество очков strokes, которое игрок в гольф должен сделать, чтобы загнать мяч в лунку и завершить игру. В зависимости от того, насколько выше или ниже parвы strokesнаходитесь, существует другое прозвище.
//
//     Вашей функции будут переданы parи strokesаргументы. Верните правильную строку в соответствии с этой таблицей, в которой штрихи перечислены в порядке приоритета; сверху (самый высокий) к низу (самый низкий):
//
// Удары	Вернуть
// 1	"Отверстие в одном!"
// <= пар - 2	"Орел"
// по - 1	"Птичка"
// к	"Пар"
// на +1	"Буги"
// на + 2	"Двойной призрак"
// >= на + 3	"Иди домой!"
// parи strokesвсегда будет числовым и положительным. Мы добавили массив всех имен для вашего удобства.
//
// golfScore(4, 1)должен вернуть строкуHole-in-one!
//
//     golfScore(4, 2)должен вернуть строкуEagle
//
// golfScore(5, 2)должен вернуть строкуEagle
//
// golfScore(4, 3)должен вернуть строкуBirdie
//
// golfScore(4, 4)должен вернуть строкуPar
//
// golfScore(1, 1)должен вернуть строкуHole-in-one!
//
//     golfScore(5, 5)должен вернуть строкуPar
//
// golfScore(4, 5)должен вернуть строкуBogey
//
// golfScore(4, 6)должен вернуть строкуDouble Bogey
//
// golfScore(4, 7)должен вернуть строкуGo Home!
//
//     golfScore(5, 9)должен вернуть строкуGo Home!

// ===
// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
//
// function golfScore(par, strokes) {
//     // Only change code below this line
//
//
//     return "Change Me";
//     // Only change code above this line
// }
//
// golfScore(5, 4);
// ===

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line

    if (strokes == 1) {
        return names[0]; //"Hole-in-one!" +
    }
    else if (strokes <= par - 2) {
        return names[1]; //"Eagle" +
    }
    else if (strokes == par - 1) {
        return names[2]; //"Birdie" +
    }
    else if (strokes == par) {
        return names[3]; //"Par"
    }
    else if (strokes == par + 1) {
        return names[4]; //"Bogey"
    }
    else if (strokes == par + 2) {
        return names[5]; //"Double Bogey"
    }
    else {
        return names[6]; //"Go Home!"
    }
    // Only change code above this line
}

golfScore(5, 4);