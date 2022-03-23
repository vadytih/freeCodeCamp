// Глобальный охват и функции
// В JavaScript область видимости относится к видимости переменных. Переменные, определенные вне функционального блока, имеют глобальную область действия. Это означает, что их можно увидеть повсюду в вашем коде JavaScript.
//
//     Переменные, объявленные без ключевых слов letили const, автоматически создаются в области globalвидимости. Это может привести к непредвиденным последствиям в другом месте вашего кода или при повторном запуске функции. Вы всегда должны объявлять свои переменные с помощью letили const.
//
// С помощью letили constобъявите глобальную переменную с именем myGlobalвне какой-либо функции. Инициализируйте его со значением 10.
//
// Внутри функции fun1назначьте 5без использования ключевых oopsGlobal словlet или const.
//
// myGlobalдолжны быть определены
//
// myGlobalдолжно иметь значение10
//
// myGlobalдолжны быть объявлены с использованием ключевых слов letилиconst
//
// oopsGlobalдолжна быть глобальной переменной и иметь значение5

// ===
// // Declare the myGlobal variable below this line
//
//
// function fun1() {
//     // Assign 5 to oopsGlobal Here
//
// }
//
// // Only change code above this line
//
// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }
// ===

// Declare the myGlobal variable below this line


function fun1() {
    // Assign 5 to oopsGlobal Here

}

// Only change code above this line

let myGlobal = 10;

function fun2() {
    oopsGlobal = 5;
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}