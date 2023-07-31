// constructor

// Dalam pemrograman berorientasi objek, "constructor" adalah sebuah metode khusus yang digunakan untuk
// menginisialisasi objek yang baru dibuat dari sebuah class. Constructor biasanya dijalankan secara otomatis
// saat sebuah objek diciptakan, dan berfungsi untuk mengatur nilai awal atau melakukan tindakan tertentu yang
// diperlukan sebelum objek dapat digunakan.

// Di banyak bahasa pemrograman berorientasi objek, termasuk TypeScript, constructor memiliki nama khusus yang sama
// dengan nama class dan tidak mengembalikan nilai apa pun. Biasanya, constructor didefinisikan menggunakan kata
// kunci "constructor" di dalam class.

class Hewan2 {
  constructor() {
    console.log("constructor akan selalu di panggil terlebih dahulu");
  }
}

let hewan2 = new Hewan2();
