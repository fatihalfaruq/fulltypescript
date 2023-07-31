"use strict";
class Animal {
    constructor(nama) {
        this.nama = nama;
    }
}
class shark {
    constructor() {
        this.nama = "hiu";
    }
    swimming() {
        console.log("aku bisa berenang");
    }
}
let hiu = new shark();
console.log(hiu.swimming());
