"use strict";
class Samsung {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log("menu tapped");
    }
    home() {
        console.log("home tapped");
    }
    back() {
        console.log("back tapped");
    }
}
class Assus {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log("menu tapped");
    }
    home() {
        console.log("home tapped");
    }
    back() {
        console.log("back tapped");
    }
}
class GameA {
    constructor(phone) {
        this.phone = phone;
    }
    back() {
        console.log("kembali ke menu utama di game");
    }
    menu() {
        this.phone.menu();
    }
    home() {
        this.phone.home();
    }
}
const samsung = new Samsung("Tipe A");
const game = new GameA(samsung);
game.home();
game.back();
game.menu();
class IPhone {
    constructor(name) {
        this.name = name;
    }
    home() {
        console.log("muncul global");
    }
}
const iphone = new IPhone("ipong");
