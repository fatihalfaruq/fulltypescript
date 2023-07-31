// Dalam TypeScript, terdapat beberapa macam variable (variabel) yang dapat digunakan. Berikut adalah penjelasan
// singkat mengenai beberapa macam variable dalam TypeScript:

///////////////////////////////////////////////////////////////////////////

// var: Ini adalah cara tradisional untuk mendeklarasikan variabel sebelum hadirnya TypeScript. Variabel yang
// dideklarasikan dengan var memiliki function scope, artinya variabel hanya terlihat di dalam fungsi tempat
// variabel tersebut dideklarasikan atau di dalam blok kondisional (if, for, dll.). Variabel dengan var juga
// dapat di-hoist (dinaikkan ke atas) ke bagian atas fungsi.

function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Output: 10 (variabel 'x' masih terlihat di sini karena hoisting)
}

///////////////////////////////////////////////////////////////////////////

//   let: Pengenalan let pada TypeScript memperbaiki beberapa masalah yang dimiliki var. Variabel yang
//   dideklarasikan dengan let memiliki block scope, artinya variabel hanya terlihat di dalam blok tempat
//   variabel dideklarasikan.

function exampleLet() {
  if (true) {
    let y = 20;
  }
  // console.log(y); // Error: 'y' is not defined (variabel 'y' tidak terlihat di sini karena block scope)
}

///////////////////////////////////////////////////////////////////////////

//   const: Variabel yang dideklarasikan dengan const juga memiliki block scope, namun nilainya tidak dapat diubah
//   setelah diberikan nilai awal. const digunakan untuk mendeklarasikan konstanta.

const PI = 3.14;
// PI = 3.14159; // Error: Cannot assign to 'PI' because it is a constant

///////////////////////////////////////////////////////////////////////////

// global: Variabel yang dideklarasikan di luar semua fungsi atau blok disebut variabel global. Variabel global
// dapat diakses dari mana saja di dalam kode TypeScript dan akan menjadi bagian dari objek window jika kode
// dijalankan di lingkungan browser.

let globalVar = 100;

function exampleGlobal() {
  console.log(globalVar); // Output: 100
}

///////////////////////////////////////////////////////////////////////////

// Deklarasi Destructuring: Dalam TypeScript, kita dapat mendestrukturisasi (destructuring) array dan objek
// menjadi variabel terpisah.

// Array destructuring
const [a1, b2] = [1, 2];
console.log(a1); // Output: 1
console.log(b2); // Output: 2

// Object destructuring
const { firstName, lastName } = { firstName: "John", lastName: "Doe" };
console.log(firstName); // Output: "John"
console.log(lastName); // Output: "Doe"

///////////////////////////////////////////////////////////////////////////

// Deklarasi Tuple: Tuple adalah array yang memiliki tipe data yang telah ditentukan dan jumlah elemen yang tetap.

let tupleExample: [string, number] = ["hello", 42];
console.log(tupleExample[0]); // Output: "hello"
console.log(tupleExample[1]); // Output: 42
