///////////////////////////////////////////////////////////////////////////

// TYPESCRIPT

// apa itu TYPESCRIPT?

// TypeScript adalah sebuah bahasa pemrograman
// yang merupakan superset dari JavaScript.
// Tujuan utama dari TypeScript adalah memberikan
// dukungan statis dan tipe data yang kuat pada JavaScript,
// sehingga memungkinkan pengembangan aplikasi yang lebih
// besar, kompleks, dan mudah dipelihara

// TypeScript sebenarnya adalah bahasa
//pemrograman mandiri yang dikembangkan
//oleh Microsoft, yang didasarkan pada JavaScript.

///////////////////////////////////////////////////////////////////////////

// STRING

// String dalam pemrograman adalah tipe data
// untuk menyimpan teks atau urutan karakter.
// Misalnya, "Halo dunia!". Anda dapat memanipulasi
// string dengan metode seperti penggabungan,
// pemotongan, dan pencarian karakter. String
// digunakan untuk menyimpan pesan, nama file,
// dan banyak lagi dalam program.

var string: string = "nama";
string = "43"; //untuk mengubah isi array
string = "apapapa"; //jika perubahan ada dua,maka yang akan muncul di console itu perubahan terakhir
console.log(string);

///////////////////////////////////////////////////////////////////////////

// NUMBER

// Tipe data number dalam pemrograman tidak hanya bisa
// diisi oleh angka, tetapi juga dapat mengambil nilai
// numerik lainnya seperti bilangan desimal atau negatif.
// Selain itu, tipe data number juga mencakup tipe data
// khusus seperti tipe data bigint yang dapat digunakan
// untuk menyimpan bilangan bulat yang sangat besar

let number: number = 21;
number = 3;

///////////////////////////////////////////////////////////////////////////

// BOOLEAN

// Tipe data boolean adalah tipe data yang hanya memiliki dua nilai
// yang mungkin: true (benar) dan false (salah). Tipe data boolean
// digunakan untuk merepresentasikan keadaan logika yang dapat
// bernilai benar atau salah.

var boolean: boolean = false;
boolean = false;

///////////////////////////////////////////////////////////////////////////

// ANY

// Tipe data "any" dalam TypeScript adalah tipe data yang memungkinkan nilai dari
// berbagai jenis dan tidak memerlukan pengecekan tipe pada saat kompilasi. Dalam
// tipe data "any", pengembang dapat mengatribuskan nilai dari tipe apapun ke variabel
// dengan tipe "any" tanpa memperhatikan tipe aslinya.

let bebas: any = "bebas";
bebas = 0;
bebas = [];
bebas = {};
bebas = false || "string" || 232 || [1, 2, "dsds"];

///////////////////////////////////////////////////////////////////////////

// ARRAY

// Tipe data "array" dalam pemrograman adalah tipe data yang digunakan untuk menyimpan
// dan mengelompokkan kumpulan nilai atau elemen dengan tipe data yang sama. Elemen-elemen
// ini disimpan dalam urutan tertentu, dan setiap elemen diakses menggunakan indeks
// numerik yang dimulai dari 0, kita dapat mendeklarasikan tipe data array menggunakan
// sintaksis "tipeData[]" atau "Array<tipeData>". Tipe data ini memungkinkan kita untuk
// menyatakan jenis elemen yang akan disimpan dalam array.

let array: string[] = ["string1", "string2", "string3"];
let array1: number[] = [1, 2, 3, 4, 5];
let array2: boolean[] = [true, false, true];
let array3: any = [1, "string", true];
let array4 = [1, "string", true];

let angka2: Array<number> = [10, 20, 30, 40, 50]; // Array angka2 dengan tipe data number
// menggunakan sintaksis Array<tipeData>

///////////////////////////////////////////////////////////////////////////

// TIPE DATA OBJECT

// Dalam pemrograman, tipe data "object" mengacu pada tipe data yang merepresentasikan sebuah objek yang
// terdiri dari kumpulan properti atau pasangan kunci-nilai. Properti dalam objek dapat berupa tipe data
// apa pun, termasuk tipe data primitif (seperti string, number, boolean) dan tipe data lainnya seperti
// array, fungsi, atau objek lainnya.

// Dalam TypeScript, tipe data "object" dapat digunakan untuk menyatakan struktur objek dengan
// properti-properti yang spesifik. Kita dapat mendeklarasikan tipe data objek menggunakan tipe data
// objek built-in atau dengan membuat antarmuka (interface) kustom.

let user: object = {
  name: "John",
  age: 30,
  isActive: true,
};

console.log(user);

// tidak dapat memanggil perproperti di console log karna tipe data object tidak bisa membaca atau
// tidak mempunyai informasi tentang properti di dalam nya

//tanpa tipe data object

let user3 = {
  name: "tanpa tipe data object",
  age: 30,
  isActive: true,
};

console.log(user3.name); //<== bisa memanggil property

///////////////////////////////////////////////////////////////////////////

// ENUM

// Tipe data "enum" dalam pemrograman digunakan untuk mendefinisikan sebuah kumpulan nilai
// yang memiliki nama yang dapat dibaca dengan mudah. Enum memungkinkan kita untuk memberi
// label pada nilai-nilai tertentu dan menggunakan label tersebut dalam kode kita.

// Dalam TypeScript, enum adalah salah satu tipe data bawaan yang memungkinkan kita untuk
// mendefinisikan kumpulan nilai dengan memberikan label yang dapat digunakan dalam kode.

// numeric enum

enum month {
  jan = 1,
  feb,
  mar,
}
console.log(month.mar);

//string enum

enum month2 {
  jan = "aa",
  feb = "fds",
  mar = "fdsf",
}
console.log(month2);

///////////////////////////////////////////////////////////////////////////

// UNION TYPE

// Union type dalam TypeScript adalah tipe data yang memungkinkan kita untuk mendeklarasikan
// bahwa suatu variabel atau parameter dapat memiliki lebih dari satu tipe data. Dalam union
// type, kita menggunakan tanda "|" (pipe) untuk memisahkan tipe-tipe data yang diizinkan.

let phone: string | number;

phone = 424232424;
phone = "apapa";
