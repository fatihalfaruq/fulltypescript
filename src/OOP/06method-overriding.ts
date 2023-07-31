// method overriding

// Method overriding adalah konsep dalam pemrograman berorientasi objek di mana sebuah subclass (child class)
// menyediakan implementasi ulang (override) dari method yang sudah didefinisikan dalam superclass (parent class).
// Dengan kata lain, subclass menggantikan implementasi dari method dalam superclass dengan implementasi yang sesuai
// dengan kebutuhan subclass tersebut.

// Dalam TypeScript, ketika Anda mendefinisikan sebuah method dengan nama yang sama dalam subclass seperti yang ada
// di superclass, maka method pada subclass akan "menggantikan" method pada superclass. Ini berarti ketika Anda
// memanggil method pada objek dari subclass, implementasi method pada subclass akan dijalankan, bukan implementasi
// yang ada di superclass.

class Hewan7 {
  constructor(public nama: string) {}
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
