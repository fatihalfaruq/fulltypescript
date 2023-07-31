"use strict";
class TokoLama {
    constructor() {
        this.name = "toko lama";
        this.profit = 100;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class TokoBaru {
    constructor() {
        this.name = "toko baru";
        this.profit = 2500;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
class HijabProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
class FoodProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
const tokolama = new TokoLama();
const tokobaru = new TokoBaru();
const hijabmahal1 = new HijabProduct(tokolama, "hijab1", 100000);
const hijabmahal2 = new HijabProduct(tokobaru, "hijab1", 200000);
console.log(hijabmahal1);
console.log(hijabmahal2);
hijabmahal1.sell();
hijabmahal2.sell();
