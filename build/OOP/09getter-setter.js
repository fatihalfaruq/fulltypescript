"use strict";
class ProductA {
    constructor() {
        this.price = 0;
        this.discount = 0.05;
    }
    set Price(value) {
        this.price = value - value * this.discount;
    }
    get Price() {
        return this.price;
    }
}
const productA = new ProductA();
productA.Price = 2000;
console.log(productA.Price);
