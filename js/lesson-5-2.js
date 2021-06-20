const cart = document.getElementById('cart');
const catalog = document.getElementById('catalog');

let prodArray = []; // Массив товаров на странице
let CartArray = []; // Массив корзины

function getIDCounter(params) {
    let lastID = 1;

    return function () {
        return lastID++
    }
}
const idCounter = getIDCounter();
const cartIdCounter = getIDCounter();

function fetchGoods() {
    prodArray = [
        new Good('https://picsum.photos/300', 'Футболка', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1200),
        new Good('https://picsum.photos/300', 'Рубашка', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1700),
        new Good('https://picsum.photos/300', 'Брюки', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1500),
        new Good('https://picsum.photos/300', 'Джинсы', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1100),
        new Good('https://picsum.photos/300', 'Футболка', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1200),
        new Good('https://picsum.photos/300', 'Рубашка', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1700),
        new Good('https://picsum.photos/300', 'Брюки', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1500),
        new Good('https://picsum.photos/300', 'Джинсы', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus.', 1100),
    ]
}

function Good(img, title, desc, price) {
    this.id = idCounter();
    this.img = img;
    this.title = title;
    this.desc = desc;
    this.price = price;
}

function GoodCart({ title, price }) {
    this.id = cartIdCounter();
    this.title = title;
    this.price = price;
}

function countBasketPrice() {
    let res = 0;
    for (let good of CartArray) {
        res += (good.price);
    }
    return res;

}

function Cart() {
    cart.textContent = '';
    if (CartArray.length <= 0) {
        cart.insertAdjacentHTML('beforeend', '<p>В вашей корзине нет товаров</p>');

    } else {
        let sumcart = countBasketPrice();
        cart.insertAdjacentHTML('beforeend', '<p>В вашей корзине ' + CartArray.length + ' товаров на сумму ' + sumcart + '</p>');

    }
}

function cardReader() {
    for (let good of prodArray) {
        cardOutput(good);
    }
}

function addToCart(id) {
    const good = prodArray.find(function (good) {

        return good.id === id;
    });
    CartArray.push(new GoodCart(good))
}

function cardOutput({ img, title, desc, price, id }) {
    let item = `
    <div class="card"> 
        <img class="card__img" src="${img}">
        <h2 class= "card__head" > ${title}</h2>
        <p class="card__desc">${desc} </p>
        <p class="card__price"><span class="card__price-bold">Цена:</span> ${price} &#8381;</p>
        <button class="card__btn" data-id="${id}">Add to Cart</button>
    </div >`;

    catalog.insertAdjacentHTML('beforeend', item);
}

catalog.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        addToCart(Number(e.target.getAttribute('data-id')));
        Cart();
    }
})

fetchGoods();
cardReader();
Cart();
