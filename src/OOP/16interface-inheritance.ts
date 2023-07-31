// INTERFACE INHERITANCE

// Interface inheritance (warisan antar interface) adalah konsep dalam TypeScript di mana sebuah interface
// dapat mengambil sifat-sifat (properties dan methods) dari interface lain. Hal ini memungkinkan Anda untuk
// menciptakan hierarki interface, di mana interface turunan dapat menambahkan atau mewarisi sifat-sifat dari
// interface induk.

// Anda menggunakan kata kunci extends untuk menerapkan interface inheritance. Ketika sebuah interface mewarisi
// dari interface lain, maka interface yang mewarisi (turunan) akan memiliki semua sifat-sifat dari interface yang
// diwarisi (induk), serta dapat menambahkan sifat-sifat tambahan jika dibutuhkan.

interface Vehicle {
  name: string;
  wheels: number;
}
interface Car extends Vehicle {
  doors: number;
}
interface Motocychle extends Vehicle {
  spion: number;
}
class Civic implements Car {
  name: string = "civic";
  wheels: number = 4;
  doors: number = 5;
}
let civic = new Civic();
console.log(civic);

class Supra implements Motocychle {
  name: string = "Supra";
  wheels: number = 2;
  spion: number = 2;
}
let supra = new Supra();
console.log(supra);
