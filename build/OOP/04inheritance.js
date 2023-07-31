"use strict";
class Hewan5 {
    constructor() {
        this.nama = "";
        this.kaki = 0;
    }
    bernafas() {
        console.log(`${this.nama} sudah tidak bernafas(mati)`);
    }
}
class Burung5 extends Hewan5 {
    constructor() {
        super(...arguments);
        this.warna = "";
    }
}
let burung5 = new Burung5();
burung5.nama = "kutinglang";
burung5.kaki = 2;
burung5.warna = "kuning";
console.log(burung5);
burung5.bernafas();
