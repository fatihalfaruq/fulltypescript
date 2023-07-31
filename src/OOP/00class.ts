// OOP (Object-Oriented Programming) adalah paradigma pemrograman yang berfokus pada pemodelan dunia nyata dalam
// bentuk objek, di mana objek-objek ini memiliki atribut (data) dan metode (fungsi) yang menggambarkan perilaku
// dan interaksi mereka satu sama lain. TypeScript adalah sebuah bahasa pemrograman yang dikembangkan oleh Microsoft,
// dan merupakan superset dari JavaScript, artinya semua fitur dari JavaScript juga berlaku di TypeScript. Namun,
// TypeScript menambahkan tipe statis (type system) ke dalam bahasa tersebut.

// Dengan menggunakan OOP di TypeScript, Anda dapat membuat kelas sebagai blueprint atau cetak biru untuk objek-objek
// yang akan Anda buat. Setiap objek adalah instance dari kelas, dan Anda dapat membuat banyak objek berbeda dari satu
// kelas. Dalam OOP TypeScript, beberapa konsep utama yang perlu diketahui meliputi:

// Kelas (Class): Sebuah blueprint yang mendefinisikan atribut dan metode untuk objek-objek yang akan dibuat.
// Misalnya, jika Anda ingin membuat objek untuk merepresentasikan manusia, Anda dapat membuat kelas "Manusia" dengan
// atribut seperti nama, usia, dan metode seperti berjalan atau bicara.

// Objek (Object): Instance dari kelas yang sesuai, yang mewakili sebuah entitas dalam aplikasi Anda. Objek berisi
// data (atribut) dan perilaku (metode) sesuai dengan yang telah didefinisikan di kelasnya.

// Enkapsulasi (Encapsulation): Konsep untuk menyembunyikan detail internal objek dan hanya mengekspos apa yang
// diperlukan untuk digunakan secara publik. Ini membantu dalam mengatur kompleksitas kode dan mencegah akses
// langsung ke data yang tidak diinginkan.

// Pewarisan (Inheritance): Konsep di mana sebuah kelas baru dapat mewarisi atribut dan metode dari kelas lain yang
// sudah ada. Pewarisan memungkinkan penggunaan kembali kode dan hierarki kelas.

// Polimorfisme (Polymorphism): Konsep di mana kelas-kelas yang berbeda dapat menggunakan metode yang sama dengan
// implementasi yang berbeda. Polimorfisme memungkinkan Anda untuk menggunakan satu nama metode untuk banyak
// kelas yang berbeda.

// TypeScript menambahkan dukungan tipe statis ke JavaScript, sehingga memungkinkan Anda untuk mendeklarasikan tipe
// data dari variabel, parameter fungsi, dan nilai kembali. Ini membantu dalam mendeteksi kesalahan saat kompilasi
// dan meningkatkan pengalaman pengembangan dengan menambahkan fitur auto-completion dan IntelliSense di banyak
// editor kode.

// class object

// Class adalah sebuah blueprint atau cetak biru yang mendefinisikan struktur, atribut (data), dan perilaku
// (metode) dari objek-objek yang akan dibuat. Class berfungsi sebagai kerangka dasar untuk menciptakan objek-objek
// dengan karakteristik yang sama. Dalam hal ini, class adalah abstraksi dari objek dan mendefinisikan apa yang dapat
// dilakukan oleh objek serta bagaimana objek tersebut berinteraksi dengan dunia luar. Class hanya berisi definisi,
// dan objek-objeknya diciptakan berdasarkan definisi ini.

// Objek adalah sebuah instansi konkret yang dibuat berdasarkan class. Ketika Anda menciptakan objek, Anda menggunakan
// class sebagai panduan untuk menentukan atribut dan perilaku objek tersebut. Dalam OOP, objek adalah unit dasar yang
// mewakili sebuah entitas yang memiliki karakteristik dan perilaku sesuai dengan class yang digunakan sebagai
// blueprint.

class Hewan {}

const kucing = new Hewan();
const anjing = new Hewan();

console.log(typeof kucing);
console.log(typeof Hewan);
