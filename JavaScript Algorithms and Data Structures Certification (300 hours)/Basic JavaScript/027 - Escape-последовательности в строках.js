// Escape-последовательности в строках
// Кавычки — не единственные символы, которые можно экранировать внутри строки. Есть две причины использовать экранирующие символы:
//
//     Чтобы вы могли использовать символы, которые иначе не сможете напечатать, например, возврат каретки.
//     Чтобы позволить вам представлять несколько кавычек в строке без того, чтобы JavaScript неправильно интерпретировал то, что вы имеете в виду.
//     Мы узнали об этом в предыдущем задании.
//
//     Код	Выход
// \'	одинарная кавычка
// \"	двойная кавычка
// \\	обратная косая черта
// \n	новая линия
// \r	возврат каретки
// \t	вкладка
// \b	граница слова
// \f	подача формы
// Обратите внимание, что саму обратную косую черту необходимо экранировать, чтобы она отображалась как обратная косая черта.
//
//     Назначьте следующие три строки текста одной переменной myStr, используя escape-последовательности.
//
//     первая линия
//     \ вторая линия третья
// линия
// Вам нужно будет использовать управляющие последовательности, чтобы правильно вставлять специальные символы. Вам также нужно будет следовать интервалам, как показано выше, без пробелов между управляющими последовательностями или словами.
//
//     Примечание . Отступ для SecondLineдостигается с помощью escape-символа табуляции, а не пробелов.
//
//     myStrне должно содержать пробелов
//
// myStrдолжен содержать строки FirstLineи (помните о чувствительности к регистру)SecondLineThirdLine
//
// FirstLineдолжен сопровождаться символом новой строки\n
//
// myStrдолжен содержать символ табуляции, \tкоторый следует за символом новой строки
//
// SecondLineдолжен предшествовать символ обратной косой черты\
//
// Между и должен быть символ новой SecondLineстрокиThirdLine
//
// myStrдолжен содержать только символы, указанные в инструкции
//
// ===
// const myStr = ""; // Change this line
// ===

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line