/////////////////////////////////////////////////////////////////////////

// function

// Function (fungsi) dalam pemrograman adalah sebuah blok kode yang dapat menerima argumen,
// melakukan serangkaian tindakan, dan mengembalikan nilai (jika diperlukan). Fungsi digunakan
// untuk mengorganisir dan memisahkan logika program menjadi bagian-bagian yang dapat digunakan kembali.

function getName(): string {
  return " ada return di sini ";
}
console.log(getName());

/////////////////////////////////////////////////////////////////////////

function myFunction() {
  alert("Hello, world!");
}
myFunction();

/////////////////////////////////////////////////////////////////////////

function salken(name: string) {
  return `Hello, ${name}!`;
}

const name2: string = "John";
console.log(salken(name2));
const greetingMessage: string = salken(name2);
alert(greetingMessage);

/////////////////////////////////////////////////////////////////////////

// function menggunakan void

// Dalam pemrograman, "void" adalah tipe data yang menunjukkan bahwa suatu fungsi tidak mengembalikan
// nilai apa pun. Tipe data "void" digunakan untuk mendeklarasikan bahwa fungsi hanya menjalankan
// serangkaian tindakan atau operasi tanpa menghasilkan nilai kembali.

function printName(): void {
  console.log("print di sini");
}
printName();

/////////////////////////////////////////////////////////////////////////

// ARGUMEN TYPE PADA TYPESCRIPT

// Argumen tipe pada fungsi (function argument type) dalam TypeScript adalah cara untuk
// menentukan tipe data yang diharapkan dari argumen yang diterima oleh sebuah fungsi.
// Dengan mendefinisikan tipe data argumen, kita dapat memastikan bahwa nilai yang diberikan
// kepada fungsi sesuai dengan tipe data yang diharapkan.

function multiplay(val1: number, val2: number): number {
  return val1 * val2;
}
const result = multiplay(5, 5);
console.log(result);
console.log(multiplay(5, 5)); // opsi pemanggilan lebih simpel tanpa mambuat variable

/////////////////////////////////////////////////////////////////////////

// FUNCTION AS TYPE

// Dalam TypeScript, kita dapat menggunakan "function as type" atau "fungsi sebagai tipe data"
// untuk mendefinisikan tipe data yang merupakan fungsi. Dengan menggunakan konsep ini, kita
// dapat mendeklarasikan dan menggunakan tipe data fungsi seperti tipe data lainnya,
// seperti string atau number.

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 * val2;
};

const hasil = Add(2, 5);
console.log(hasil);

/////////////////////////////////////////////////////////////////////////

// anonymous/expresion function

// anonymous function (juga dikenal sebagai expression function) adalah fungsi yang tidak memiliki nama saat
// didefinisikan. Ini berarti fungsi tersebut tidak memiliki identitas yang dapat diakses secara langsung melalui
// nama fungsi.

// Anonymous function biasanya digunakan sebagai bagian dari ekspresi, seperti atribusi ke variabel,
// parameter fungsi, atau sebagai nilai kembali dari fungsi lain (fungsi tingkat atas atau higher-order functions).

let pungsi = function (a: number, b: number) {
  return a + b;
};
console.log(pungsi(10, 5));

/////////////////////////////////////////////////////////////////////////

// arrow function

// Arrow function adalah fitur baru dalam JavaScript dan TypeScript yang memungkinkan Anda mendefinisikan
// fungsi dengan sintaksis yang lebih ringkas dan ekspresif. Arrow function diperkenalkan dalam ECMAScript 6 (ES6)
// atau dikenal juga sebagai ECMAScript 2015.

let fungsi = () => console.log("ini arrow function");
fungsi();

/////////////////////////////////////////////////////////////////////////

//filter menggunakan arrow function

const angkabaru = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Angkabaru = angkabaru.filter((a) => a > 3);
console.log(Angkabaru);

/////////////////////////////////////////////////////////////////////////

//filter menggunakan function biasa

const angkabaru1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Angkabaru1 = angkabaru1.filter(function (b) {
  return b < 4;
});
console.log(Angkabaru1);

/////////////////////////////////////////////////////////////////////////

// FUNCTION DEFAULT PARAMETER

// Function default parameter adalah fitur dalam bahasa pemrograman yang memungkinkan
// kita untuk memberikan nilai default kepada parameter fungsi. Jika sebuah argumen tidak
// diberikan saat pemanggilan fungsi, nilai default akan digunakan sebagai
// nilai parameter tersebut.

const fullName = (first: string, last: string = "fdfdfd"): string => {
  return last + "" + first;
};
console.log(fullName("hamdan"));

/////////////////////////////////////////////////////////////////////////

// FUNCTION OPTIONAL PARAMETER

// Function optional parameter adalah fitur dalam bahasa pemrograman yang memungkinkan
// kita untuk mendeklarasikan parameter fungsi yang tidak wajib diberikan argumen saat
// pemanggilan fungsi. Dengan menggunakan optional parameter, kita dapat membuat beberapa
// parameter menjadi opsional, sehingga pengguna fungsi dapat memilih untuk memberikan
// argumen atau tidak

const getUmur = (val1: number, val2?: number): string => {
  return val1 + "" + val2;
};
console.log(getUmur(2, 32));

/////////////////////////////////////////////////////////////////////////

//menthod chaining

// Method chaining adalah konsep dalam pemrograman di mana kita memanggil serangkaian metode pada objek
// yang sama secara beruntun, tanpa perlu menyimpannya dalam variabel sementara atau variabel terpisah.
// Metode ini umumnya digunakan pada objek yang mendukung metode berantai (chaining methods).

// Dalam method chaining, setiap metode yang dipanggil pada objek akan mengembalikan objek itu sendiri
// (atau objek dengan nilai tertentu), sehingga kita dapat langsung memanggil metode berikutnya pada hasil
// dari metode sebelumnya. Metode ini sering digunakan dalam bahasa pemrograman yang mendukung pemanggilan
// metode berantai, termasuk JavaScript dan TypeScript.

class ShoppingCart {
  private items: string[] = [];

  addItem(item: string): ShoppingCart {
    this.items.push(item);
    return this; // Mengembalikan objek ShoppingCart itu sendiri untuk method chaining
  }

  removeItem(item: string): ShoppingCart {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
    return this; // Mengembalikan objek ShoppingCart itu sendiri untuk method chaining
  }

  showItems(): void {
    console.log("Shopping Cart Items:", this.items);
  }
}

const cart = new ShoppingCart();

cart
  .addItem("Shirt")
  .addItem("Shoes")
  .addItem("Hat")
  .removeItem("Shoes")
  .showItems();

// Output:
// Shopping Cart Items: [ 'Shirt', 'Hat' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////

// hitung hitungan menggunakan function di halaman web

// let panjang: any = prompt("masukan angka");
// let lebar: any = prompt("masukan angka");
// let tinggi: any = prompt("masukan angka");

// function volumebalok(panjang: any, lebar: any, tinggi: any) {
//   return panjang * lebar * tinggi;
// }
// alert(volumebalok(panjang, lebar, tinggi));

/////////////////////////////////////////////////////////////////////////

// hitung hitungan menggunakan function di halaman web

// var nilaya = Number(prompt("masukan panjang!"));
// var nilayb = Number(prompt("masukan lebar!"));

// function luaspersegipanjang(a: number, b: number) {
//   return a * b;
// }

// var jumlah = luaspersegipanjang(nilaya, nilayb);
// alert(jumlah);

/////////////////////////////////////////////////////////////////////////
