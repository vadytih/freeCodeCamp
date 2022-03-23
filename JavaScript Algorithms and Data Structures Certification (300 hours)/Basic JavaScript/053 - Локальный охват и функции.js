// Переменные, объявленные внутри функции, а также параметры функции имеют локальную область видимости. Это означает, что они видны только внутри этой функции.
//
//     Вот функция myTestс локальной переменной с именем loc.
//
//     function myTest() {
//     const loc = "foo";
//     console.log(loc);
// }
//
// myTest();
// console.log(loc);
// Вызов myTest()функции отобразит строку fooв консоли. Строка console.log(loc)(вне myTestфункции) выдаст ошибку, так как locне определена вне функции.
//
//     В редакторе есть два console.log, чтобы помочь вам увидеть, что происходит. Проверяйте консоль во время написания кода, чтобы увидеть, как она изменится. myVarОбъявите внутри локальную переменную myLocalScopeи запустите тесты.
//
//     Примечание . Консоль по-прежнему будет отображать ReferenceError: myVar is not defined, но это не приведет к сбою тестов.
//
//     Код не должен содержать глобальную myVarпеременную.
//
//     Вы должны добавить локальную myVarпеременную.

// ===
// function myLocalScope() {
//     // Only change code below this line
//
//     console.log('inside myLocalScope', myVar);
// }
// myLocalScope();
//
// // Run and check the console
// // myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);
// ===

function myLocalScope() {
    // Only change code below this line
    let myVar;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);