"use strict";
class Hewan8 {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
}
class Katak8 extends Hewan8 {
    constructor() {
        super(...arguments);
        this.umurTelur = 1;
        this.umurKecebong = 2;
        this.umurKatak = 3;
    }
    getUmur() {
        console.log(this.umurKatak + this.umurKecebong + this.umurTelur);
    }
}
let kodok8 = new Katak8("jincuriki", 3, false);
console.log(kodok8);
kodok8.getUmur();
