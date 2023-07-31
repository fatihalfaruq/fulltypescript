"use strict";
function getName() {
    return " ada return di sini ";
}
console.log(getName());
function myFunction() {
    alert("Hello, world!");
}
myFunction();
function salken(name) {
    return `Hello, ${name}!`;
}
const name2 = "John";
console.log(salken(name2));
const greetingMessage = salken(name2);
alert(greetingMessage);
function printName() {
    console.log("print di sini");
}
printName();
function multiplay(val1, val2) {
    return val1 * val2;
}
const result = multiplay(5, 5);
console.log(result);
console.log(multiplay(5, 5));
const Add = (val1, val2) => {
    return val1 * val2;
};
const hasil = Add(2, 5);
console.log(hasil);
let pungsi = function (a, b) {
    return a + b;
};
console.log(pungsi(10, 5));
let fungsi = () => console.log("ini arrow function");
fungsi();
const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Angkabaru = angkabaru.filter((a) => a > 3);
console.log(Angkabaru);
const angkabaru1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Angkabaru1 = angkabaru1.filter(function (b) {
    return b < 4;
});
console.log(Angkabaru1);
const fullName = (first, last = "fdfdfd") => {
    return last + "" + first;
};
console.log(fullName("hamdan"));
const getUmur = (val1, val2) => {
    return val1 + "" + val2;
};
console.log(getUmur(2, 32));
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        return this;
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        return this;
    }
    showItems() {
        console.log("Shopping Cart Items:", this.items);
    }
}
const cart = new ShoppingCart();
cart
    .addItem("Shirt")
    .addItem("Shoes")
    .addItem("Hat")
    .removeItem("Shoes")
    .showItems();
