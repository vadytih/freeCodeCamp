// Проверка объектов на свойства
// Иногда полезно проверить, существует ли свойство данного объекта или нет. Мы можем использовать .hasOwnProperty(propname)метод объектов, чтобы определить, имеет ли этот объект заданное имя свойства. .hasOwnProperty()возвращает trueили falseесли свойство найдено или нет.
//
//     Пример
//
// const myObj = {
//     top: "hat",
//     bottom: "pants"
// };
//
// myObj.hasOwnProperty("top");
// myObj.hasOwnProperty("middle");
// Первый hasOwnPropertyвозвращается true, а второй возвращается false.
//
//     Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный функции ( obj), определенное свойство ( checkProp). Если свойство найдено, верните значение этого свойства. Если нет, верните "Not Found".
//
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")должен вернуть строку pony.
//
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")должен вернуть строку kitten.
//
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")должен вернуть строку Not Found.
//
// checkObj({city: "Seattle"}, "city")должен вернуть строку Seattle.
//
// checkObj({city: "Seattle"}, "district")должен вернуть строку Not Found.
//
// checkObj({pet: "kitten", bed: "sleigh"}, "gift")должен вернуть строку Not Found.

// ===
// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     return "Change Me!";
//     // Only change code above this line
// }
// ===

function checkObj(obj, checkProp) {
    // Only change code below this line
    return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
    // Only change code above this line
}