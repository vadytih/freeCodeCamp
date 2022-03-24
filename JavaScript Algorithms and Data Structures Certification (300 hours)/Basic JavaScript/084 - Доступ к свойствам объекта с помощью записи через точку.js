// Доступ к свойствам объекта с помощью записи через точку
// Существует два способа доступа к свойствам объекта: запись через точку ( .) и запись в квадратных скобках ( []), аналогичная массиву.
//
//     Точечная нотация — это то, что вы используете, когда заранее знаете имя свойства, к которому пытаетесь получить доступ.
//
//     Вот пример использования записи через точку ( .) для чтения свойства объекта:
//
//     const myObj = {
//         prop1: "val1",
//         prop2: "val2"
//     };
//
// const prop1val = myObj.prop1;
// const prop2val = myObj.prop2;
// prop1valбудет иметь значение строки val1и prop2valбудет иметь значение строки val2.
//
//     Считайте значения свойств с testObjпомощью записи через точку. Установите переменную hatValueравной свойству объекта hatи установите переменную shirtValueравной свойству объекта shirt.
//
//     hatValueдолжна быть строка
//
// Значение hatValueдолжно быть строкойballcap
//
// shirtValueдолжна быть строка
//
// Значение shirtValueдолжно быть строкойjersey
//
// Вы должны использовать запись через точку дважды

// ===
// // Setup
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };
//
// // Only change code below this line
// const hatValue = testObj;      // Change this line
// const shirtValue = testObj;    // Change this line
// ===

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line