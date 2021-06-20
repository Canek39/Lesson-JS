// var a = -4;
// var b = 2;
// if (a >= 0 && b >= 0) {
//     console.log(a - b);
// }
// else if (a < 0 && b < 0) {
//     console.log(a * b);
// }
// else if (a < 0 && b >= 0 || a >= 0 && b < 0) {
//     console.log(a + b);
// }
//-----------------------------------------------

// let a = 5;
// switch (a) {
//     case 0:
//         console.log(a++);
//     case 1:
//         console.log(a++);
//     case 2:
//         console.log(a++);
//     case 3:
//         console.log(a++);
//     case 4:
//         console.log(a++);
//     case 5:
//         console.log(a++);
//     case 6:
//         console.log(a++);
//     case 7:
//         console.log(a++);
//     case 8:
//         console.log(a++);
//     case 9:
//         console.log(a++);
//     case 10:
//         console.log(a++);
//     case 11:
//         console.log(a++);
//     case 12:
//         console.log(a++);
//     case 13:
//         console.log(a++);
//     case 14:
//         console.log(a++);
//     case 15:
//         return console.log(a++);
//     default:
//         return console.log(false);
// }
//-----------------------------------------------

// function sum(x, y) { return console.log(x + y) }
// function sub(x, y) { return console.log(x - y) }
// function multi(x, y) { return console.log(x * y) }
// function div(x, y) { return console.log(x / y) }

// function mathOperation(arg1, arg2, operation) {
//     switch (operation) {
//         case "+":
//             return sum(arg1, arg2);
//         case "-":
//             return sub(arg1, arg2);
//         case "*":
//             return multi(arg1, arg2);
//         case "/":
//             return div(arg1, arg2);
//         default:
//             return console.log("False");

//     }
// }

// mathOperation(2, 5, "9");
//-----------------------------------------------

//Под * -----------------------------------------

// console.log(null > 0); //false
// console.log(null < 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true
// console.log(null <= 0); //true
//-----------------------------------------------

function power(val, pow) {
    if (pow == 0) return 1;
    else if (pow < 0) return power(1 / val, -pow);
    return (val * power(val, pow - 1));
}

console.log(power(2, 10)); //1024