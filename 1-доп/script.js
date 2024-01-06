const userInput = prompt("Введите значение:");

if (!isNaN(userInput)) {
    alert("Вы ввели число: " + userInput);
} else {
    alert("Введено не корректное значение");
}