"use strict";
class Ayam {
    static jalan() {
        console.log(`ayam berjalan dengan ${this.kaki} kaki`);
    }
    getKaki() {
        console.log(Ayam.kaki);
    }
}
Ayam.kaki = 2;
console.log(Ayam.jalan());
const ayam2 = new Ayam();
ayam2.getKaki();
const ayam3 = new Ayam();
const ayam4 = new Ayam();
const ayam5 = new Ayam();
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
Ayam.kaki = 4;
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());
