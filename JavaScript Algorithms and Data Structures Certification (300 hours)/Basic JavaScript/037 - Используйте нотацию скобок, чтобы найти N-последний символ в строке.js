// Используйте нотацию скобок, чтобы найти N-последний символ в строке
// Вы можете использовать тот же принцип, который мы только что использовали для извлечения последнего символа в строке, чтобы получить N-последний символ.
//
//     Например, вы можете получить значение предпоследней буквы const firstName = "Augusta"строки, используяfirstName[firstName.length - 3]
//
// Пример:
//
//     const firstName = "Augusta";
// const thirdToLastLetter = firstName[firstName.length - 3];
// thirdToLastLetterбудет иметь значение строки s.
//
//     Используйте запись в квадратных скобках, чтобы найти предпоследний символ в lastNameстроке.
//
//     Подсказка: попробуйте посмотреть пример выше, если вы застряли.
//
//     secondToLastLetterOfLastNameдолжна быть буква c.
//
//     Вы должны использовать .length, чтобы получить предпоследнюю букву.

// ===
// // Setup
// const lastName = "Lovelace";
//
// // Only change code below this line
// const secondToLastLetterOfLastName = lastName; // Change this line
// ===

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line