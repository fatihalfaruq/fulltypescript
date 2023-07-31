// Abstract class (kelas abstrak) adalah sebuah kelas dalam bahasa pemrograman yang tidak dapat diinstansiasi
// menjadi objek langsung. Artinya, Anda tidak dapat membuat objek dari kelas abstrak secara langsung, namun
// kelas tersebut dapat digunakan sebagai kelas dasar untuk kelas turunannya.

// Kelas abstrak digunakan sebagai kerangka atau cetakan untuk kelas-kelas turunannya (subclasses). Kelas abstrak
// biasanya berisi metode abstrak (abstract methods) yang harus diimplementasikan oleh kelas-kelas turunannya.
// Metode abstrak adalah metode yang tidak memiliki implementasi di dalam kelas abstrak itu sendiri, tetapi harus
// diimplementasikan oleh kelas turunan.

// Dalam TypeScript, Anda mendefinisikan kelas abstrak dengan menggunakan kata kunci abstract sebelum kata kunci
// class.

abstract class Hewan13 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makan(): void {
    console.log(`${this.name} sedang makan`);
  }
  abstract berjalan(): void;
}

class Anjing13 extends Hewan13 {
  constructor() {
    super("anjing");
  }
  berjalan(): void {
    console.log("anjing jalan empat kaki");
  }
}
class Burung13 extends Hewan13 {
  constructor() {
    super("burung");
  }
  berjalan(): void {
    console.log("burung mah ga jalan");
  }
}

let anjing13 = new Anjing13();
anjing13.berjalan();
let burung13 = new Burung13();
burung13.berjalan();
