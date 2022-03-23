// Понимание неизменности строк
// В JavaScript Stringзначения являются неизменяемыми , что означает, что их нельзя изменить после создания.
//
//     Например, следующий код:
//
//     let myStr = "Bob";
// myStr[0] = "J";
// не может изменить значение myStrна Job, потому что содержимое myStrне может быть изменено. Обратите внимание, что это не означает, что myStrего нельзя изменить, просто нельзя изменить отдельные символы строкового литерала . Единственный способ изменить myStrэто — присвоить ему новую строку, например:
//
// let myStr = "Bob";
// myStr = "Job";
// Исправьте присваивание, myStrчтобы оно содержало строковое значение, Hello Worldиспользуя подход, показанный в приведенном выше примере.
//
//     myStrдолжно иметь значение строки Hello World.
//
//     Не следует изменять код над указанным комментарием.

// ===
// // Setup
// let myStr = "Jello World";
//
// // Only change code below this line
// myStr[0] = "H"; // Change this line
// // Only change code above this line
// ===

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line