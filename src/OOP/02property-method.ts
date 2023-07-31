// property - method

// Properti (Properties/Atribut): Properti adalah variabel atau data yang dimiliki oleh objek yang dibuat berdasarkan
// class. Properti merepresentasikan karakteristik atau keadaan dari objek tersebut. Setiap objek yang dibuat dari
// class memiliki salinan properti dengan nilai yang unik sesuai dengan objeknya sendiri. Properti digunakan untuk
// menyimpan data dan memberikan atribut khusus pada objek.

// Method (Metode/Perilaku): Method adalah fungsi atau tindakan yang dapat dilakukan oleh objek yang dibuat
// berdasarkan class. Method memungkinkan objek untuk melakukan tugas-tugas tertentu atau berinteraksi dengan
// lingkungannya. Setiap objek yang dibuat dari class memiliki akses ke seluruh method yang didefinisikan dalam
// class tersebut. Method berfungsi untuk memodifikasi data, menjalankan logika, atau berkomunikasi dengan objek
// lain dalam program.

class Hewan3 {
  nama: string = "";
  kaki: number = 0;
  mamalia: boolean = false;
  bernafas() {
    console.log(`${this.nama} sedang bernafas`);
  }
}

const hewan3 = new Hewan3();
console.log(hewan3);

hewan3.nama = "memei";
hewan3.kaki = 2;
hewan3.mamalia = true;

console.log(hewan3);

hewan3.bernafas();
