// label: for (var i = 2; i <= 100; i++) {
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) continue label;
//     }

//     console.log(i);
// }
let i = 1;
while (i < 100) {
    i++;
    if (i % 2 == 0 && i != 2 || i % 3 == 0 && i != 3 || i % 5 == 0 && i != 5 || i % 7 == 0 && i != 7) {

        continue;
    }


    console.log(i);
}

//------------------------------------

// var CartArray = [
//     ["Product-1", 100],
//     ["Product-2", 20],
//     ["Product-3", 50],
//     ["Product-4", 420],
//     ["Product-5", 950]
// ];

// function countBasketPrice(cart) {
//     var sum = 0;
//     for (var i = 0; i < cart.length; i++) {
//         sum += cart[i][1];
//     }
//     return sum;

// }
// console.log(countBasketPrice(CartArray)); // 1540
//------------------------------------

//Под * ------------------------------
//for (var i = 0; i <= 9; console.log(i++)) { }

//------------------------------------
// var x = "x";
// for (var i = 0; i <= 20; i++) {
//     console.log(x);
//     x += "x";
// }



