"use strict";
class Hewan7 {
    constructor(nama) {
        this.nama = nama;
    }
    bernafas() {
        console.log(`${this.nama} bernafas`);
    }
}
class Katak7 extends Hewan7 {
    bernafas() {
        console.log(`${this.nama} malas bernafas`);
    }
}
let kodok = new Katak7("kodok");
console.log(kodok);
console.log(kodok.bernafas());
