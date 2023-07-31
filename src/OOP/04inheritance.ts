// INHERITANCE TYPESCRIPT

// Inheritance atau pewarisan dalam TypeScript adalah konsep yang memungkinkan sebuah
// class mewarisi properti dan metode dari class lain.Dalam pewarisan,class yang mewarisi
// disebut sebagai subclass atau child class,sedangkan class yang memberikan warisan disebut
// sebagai superclass atau parent class.

class Hewan5 {
  nama: string = "";
  kaki: number = 0;
  bernafas() {
    console.log(`${this.nama} sudah tidak bernafas(mati)`);
  }
}

class Burung5 extends Hewan5 {
  warna: string = "";
}

let burung5 = new Burung5();
burung5.nama = "kutinglang";
burung5.kaki = 2;
burung5.warna = "kuning";
console.log(burung5);
burung5.bernafas();
