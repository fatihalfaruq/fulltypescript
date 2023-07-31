// Dalam TypeScript (dan juga dalam bahasa pemrograman lainnya), static adalah sebuah kata kunci yang digunakan
// untuk mendefinisikan properti dan metode yang terkait dengan kelas itu sendiri, bukan dengan setiap instance
// objek yang dibuat dari kelas tersebut. Properti dan metode statis dapat diakses langsung dari kelas tanpa perlu
// membuat instance objek terlebih dahulu.

// Static Property (Properti Statis):
// Properti statis adalah properti yang nilainya terkait dengan kelas itu sendiri, bukan dengan setiap objek
// individu yang dibuat dari kelas tersebut. Anda bisa mengakses properti statis langsung dari kelas tanpa harus
// membuat objek terlebih dahulu.

// Static Method (Metode Statis):
// Metode statis adalah metode yang terkait dengan kelas itu sendiri, bukan dengan setiap objek individu yang
// dibuat dari kelas tersebut. Anda bisa memanggil metode statis langsung dari kelas tanpa harus membuat objek
// terlebih dahulu.

class Ayam {
  static kaki: number = 2;
  static jalan() {
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }
  getKaki() {
    console.log(Ayam.kaki);
  }
}
console.log(Ayam.jalan());
const ayam2 = new Ayam();
ayam2.getKaki();

//----------------------

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
