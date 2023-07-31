"use strict";
class Hewan13 {
    constructor(name) {
        this.name = name;
    }
    makan() {
        console.log(`${this.name} sedang makan`);
    }
}
class Anjing13 extends Hewan13 {
    constructor() {
        super("anjing");
    }
    berjalan() {
        console.log("anjing jalan empat kaki");
    }
}
class Burung13 extends Hewan13 {
    constructor() {
        super("burung");
    }
    berjalan() {
        console.log("burung mah ga jalan");
    }
}
let anjing13 = new Anjing13();
anjing13.berjalan();
let burung13 = new Burung13();
burung13.berjalan();
