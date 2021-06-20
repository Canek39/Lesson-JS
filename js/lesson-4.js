// let Num = {
//     hundreds: 0,
//     tens: 0,
//     units: 0
// }
// function NumverDivider(x) {
//     if (!Number.isInteger(x)) { return console.log("Только целые числа от 0 до 999 !"); }
//     if (x < 0 || x > 999) {
//         console.log("Число меньшне 0 или больше 999");
//         return console.log("Сотни: " + Num.hundreds + "\nДесятки: " + Num.tens + "\nЕдиницы: " + Num.units);
//     }
//     Num.units = Math.floor(x % 10);
//     Num.tens = Math.floor(x / 10 % 10);
//     Num.hundreds = Math.floor(x / 100 % 10);
// }
// NumverDivider(1000);
//--------------------------------------

var CartArray = [
    new Good('Футболка', 'Белая', 'XL', 1200, 1),
    new Good('Рубашка', 'Белая', 'M', 1700, 2),
    new Good('Брюки', 'Черные', 'XXL', 1500, 1),
    new Good('Джинсы', 'Синие', 'S', 1100, 3)
];

function Good(title, color, size, price, quantity) {
    this.title = title;
    this.color = color;
    this.size = size;
    this.price = price;
    this.quantity = quantity
}

function countBasketPrice() {
    let res = 0;
    for (let good of CartArray) {
        res += (good.price * good.quantity);
    }
    return res;

}
console.log(countBasketPrice()); // 1540

//------------------------------------