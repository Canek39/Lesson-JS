function convert() {
    var c_temp = +prompt("Конвертация температуры из Цельсия в Фаренгейт (°C → °F)\nВведите температуру");
    while (isNaN(c_temp)) {
        c_temp = +prompt("Введите число!\nКонвертация температуры из Цельсия в Фаренгейт (°C → °F)\nВведите температуру");
    }

    var f_temp = (9 / 5) * c_temp + 32;

    alert(c_temp + " °C - это " + f_temp + " °F");
}



var name = "Василий";
var admin = name;

document.write("Администратор: " + admin)





