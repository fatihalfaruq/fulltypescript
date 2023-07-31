// SUPER CONSTRUCTOR

// Superconstructor dalam TypeScript adalah konsep yang digunakan untuk memanggil
// constructor dari superclass saat membuat objek dari subclass. Superconstructor
// digunakan dalam konteks pewarisan, di mana subclass ingin menginisialisasi
// properti yang dimiliki oleh superclass.

// Dalam TypeScript, kita menggunakan kata kunci super untuk memanggil
// superconstructor. Hal ini dilakukan di dalam constructor subclass dan digunakan
// untuk meneruskan argumen yang diperlukan ke constructor superclass.

class Hewan6 {
  nama: string;
  kaki: number;
  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

class Katak6 extends Hewan6 {
  beracun: boolean;
  constructor(nama: string, kaki: number, beracun: boolean) {
    super(nama, kaki);
    this.beracun = beracun;
  }
}

let katak6 = new Katak6("gamakici", 4, true);
console.log(katak6);
